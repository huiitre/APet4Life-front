import axios from "axios";

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
  setLoadingSpinnerLogin,
  spinnerLoadUser,
} from "../actions/user";

//* venir changer ici, si url de dev ou url de prod
// const finalURL = process.env.REACT_APP_API_URL;
let finalURL = "";
if (process.env.NODE_ENV === "development") {
  finalURL = "http://localhost:3000";
} else {
  finalURL = "http://huiitre.fr";
}

const axiosInstance = axios.create({
  baseURL: finalURL,
});

const token = localStorage.getItem("TOKEN");

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_USER_INFOS:
      store.dispatch(spinnerLoadUser(true));
      // console.log(token === null);
      //? est-ce qu'un token existe en LS ?
      if (token != null) {
        //? Si oui, on lance la requête avec le token
        // console.log('token n\'est pas null');
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
        axiosInstance
          .get(`/api/secure/user/profile`)
          .then((response) => {
            //? Si le token est toujours valide, on connecte l'user
            console.log("reponse 200");
            //* on les stocke également dans le state
            store.dispatch(
              insertTokenToState(response.data.token, { ...response.data })
            );
            store.dispatch(spinnerLoadUser(false));
          })
          .catch((error) => {
            //? Sinon, si le token n'est plus valide, on supprime le token
            // console.log('token mais non valide');
            //! redondance avec le .catch()
            axiosInstance.defaults.headers.common.Authorization = null;
            store.dispatch(clearState());
            localStorage.clear();
            store.dispatch(spinnerLoadUser(false));
          });
      } else {
        //? il n'y a pas de token en LS, personne n'est connecté
        // console.log('pas d\'appel');
        //! redondance avec le .catch()
        axiosInstance.defaults.headers.common.Authorization = null;
        store.dispatch(clearState());
        localStorage.clear();
        store.dispatch(spinnerLoadUser(false));
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

      console.log("Données envoyées : ", newUser);

      axios
        .post(`${finalURL}/api/user/create`, newUser)
        .then((response) => {
          console.log("Données reçues : ", response.data);
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
        store.dispatch(setLoadingSpinnerLogin(true));
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
            axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            //* on stocke le token et les data utilisateur dans le localstorage
            localStorage.setItem("TOKEN", response.data.token);

            // on affiche le modal success
            store.dispatch(setModalSuccess(true));

            //* on les stocke également dans le state
            store.dispatch(
              insertTokenToState(response.data.token, response.data.data)
            );

            //* on clear le formulaire de signup
            store.dispatch(clearLoginForm());
          })
          .catch((error) => {
            console.log("error", error);
            store.dispatch(setLoadingSpinnerLogin(false));

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
          .patch(`/api/secure/user/update`, data)
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
