import axios from "axios";
// import { useDispatch } from 'react-redux';
import { setLoadingSpinner } from "../actions/associations";

//* import des actions
import {
  SEND_SIGN_UP,
  LOGIN,
  LOGOUT,
  UPDATE_USER_INFOS,
  DELETE_USER_INFOS,
  insertTokenToState,
  clearSignupForm,
  clearLoginForm,
  setModalSuccess,
  setModalError,
  setModalDelete,
  clearState,
  setLoadingSpinnerUser,
  setErrorMessageOnSignupForm,
  setIsError,
  changeEditionMode,
  LOAD_USER_INFOS,
} from "../actions/user";

const devURL = "http://localhost:3000";
const prodURL = "http://morgane-rabiller-server.eddi.cloud";
//* venir changer ici, si url de dev ou url de prod
const finalURL = devURL;

const axiosInstance = axios.create({
  baseURL: finalURL,
});

const token = localStorage.getItem("TOKEN");
const userId = localStorage.getItem("id_user");
const roleUser = localStorage.getItem('roleUser');

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_USER_INFOS:
      if (token && userId) {
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
        axiosInstance
          .get(`/api/secure/user/profile`)
          .then((response) => {
            if (response.status === 200) {

              //* on les stocke également dans le state
              store.dispatch(
                insertTokenToState(response.data.token, {...response.data})
              );
            } else {
              //! redondance avec le .catch()
              axiosInstance.defaults.headers.common.Authorization = null;
              store.dispatch(clearState());
              localStorage.clear();
            }
          })
          .catch((error) => {
            axiosInstance.defaults.headers.common.Authorization = null;
            store.dispatch(clearState());
            localStorage.clear();
          });
      } else {
        //! redondance avec le .catch()
        axiosInstance.defaults.headers.common.Authorization = null;
        store.dispatch(clearState());
        localStorage.clear();
      }

      next(action);
      break;

    case SEND_SIGN_UP:
      //* on lance le spinner
      store.dispatch(setLoadingSpinnerUser());
      const {
        user: {
          signup: {
            userType,
            mail,
            password,
            name,
            firstname,
            lastname,
            region,
            department,
            picture,
          },
        },
      } = store.getState();

      const newUser = {
        type: userType,
        mail,
        password,
        name,
        firstname,
        lastname,
        region,
        department,
        picture,
      };

      axios
        .post(`${finalURL}/api/user/create`, newUser)
        .then((response) => {
          //* on coupe le spinner
          store.dispatch(setLoadingSpinnerUser());
          //* on lance le modal
          store.dispatch(setModalSuccess(true));
          //* on clear le formulaire de signup
          store.dispatch(clearSignupForm());
        })
        .catch((error) => {
          //* on coupe le spinner
          store.dispatch(setLoadingSpinnerUser());
          store.dispatch(
            setErrorMessageOnSignupForm("Cet adresse mail est déjà utilisé !")
          );
          store.dispatch(setIsError(true));
        });
      next(action);
      break;

    //* envoi des infos de login et récupération + sauvegarde du token
    case LOGIN:
      {
        console.log("login dans middleware");
        const {
          user: {
            loginForm: { mail: loginMail, password: loginPassword },
          },
        } = store.getState();
        axiosInstance
          .post("/api/login_check", {
            username: loginMail,
            password: loginPassword,
          })
          .then((response) => {
            console.log(response.data);
            axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            //* on stocke le token et les data utilisateur dans le localstorage
            localStorage.setItem("TOKEN", response.data.token);
            localStorage.setItem("roleUser", response.data.data.roles[0]);
            localStorage.setItem("id_user", response.data.data.id);

            //* on les stocke également dans le state
            store.dispatch(
              insertTokenToState(response.data.token, response.data.data)
            );

            // on affiche le modal success
            store.dispatch(setModalSuccess(true));

            //* on clear le formulaire de signup
            store.dispatch(clearLoginForm());
          })
          .catch((error) => {
            console.log("error", error);

            // on affiche le modal error
            store.dispatch(setModalError(true));
          });
      }
      next(action);
      break;

    case LOGOUT:
      {
        //* on supprime le token de axios
        axiosInstance.defaults.headers.common.Authorization = null;

        //* on vide le state et le localstorage
        store.dispatch(clearState());
        localStorage.clear();

        //* on ferme le modal delete
        store.dispatch(setModalDelete(false));

        //* on ferme le mode d'édition de la page de profil
        store.dispatch(changeEditionMode(false));
      }
      next(action);
      break;

    case UPDATE_USER_INFOS:
      {
        //* on récupère le current user du state
        const {
          user: {
            currentUser: { data },
          },
        } = store.getState();

        //* on fait la requête PATCH API
        axiosInstance
          .patch(`/api/secure/user/update/${userId}`, data)
          .then((response) => {
            //? manque de contenu UX quand la modification est réussie, pareil quand il y a une erreur
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
      next(action);
      break;

    case DELETE_USER_INFOS:
      {
        //* on récupère l'ID du current user du state
        //! on a plus besoin de l'id
        /* const {
          user: {
            currentUser: {
              data: { id },
            },
          },
        } = store.getState(); */

        //* on fait la requête DELETE API
        //? ajout de axiosInstance pour insérer le token dans le bearer de la requête
        axiosInstance
          .delete(`/api/secure/user/delete`)
          .then((response) => {
            //* on vide le state et le localstorage
            store.dispatch(clearState());
            localStorage.clear();
            // store.dispatch(setModalSuccess(true));

            //* on ferme le modal delete
            store.dispatch(setModalDelete(false));

            //* on ferme le mode d'édition de la page de profil
            store.dispatch(changeEditionMode(false));
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
      next(action);
      break;

    default:
      next(action);
  }
};

export default userMiddleware;
