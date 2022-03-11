import axios from 'axios';
// import { useDispatch } from 'react-redux';
import { setLoadingSpinner } from '../actions/associations';

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
  clearState,
  setLoadingSpinnerUser,
  setErrorMessageOnSignupForm,
  setIsError,
} from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {

  const devURL = 'http://localhost:3000';
  const prodURL = 'http://morgane-rabiller-server.eddi.cloud';
  //* venir changer ici, si url de dev ou url de prod
  const finalURL = devURL;
  switch (action.type) {
    case SEND_SIGN_UP:
      //* on lance le spinner
      store.dispatch(setLoadingSpinnerUser());
      const { user: { signup: {
        userType,
        mail,
        password,
        name,
        firstname,
        lastname,
        region,
        department,
        picture
      }}} = store.getState();

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
          store.dispatch(setErrorMessageOnSignupForm('Cet adresse mail est déjà utilisé !'));
          store.dispatch(setIsError(true));
        });
      next(action);
      break;
  
    //* envoi des infos de login et récupération + sauvegarde du token
    case LOGIN: {
        console.log('login dans middleware');
        const { user: {loginForm : {
          mail : loginMail,
          password : loginPassword,
        }} } = store.getState();
        
        console.log(loginMail, loginPassword)
        
        axios.post(`${finalURL}/api/login_check`, {
          "username": loginMail,
          "password": loginPassword,
        })
          .then((response) => {
            console.log('success', response.data)
            
            //* on stocke le token et les data utilisateur dans le localstorage
            localStorage.setItem('TOKEN', response.data.token);
            const userData = JSON.stringify(response.data.data)
            localStorage.setItem('userData', userData);

            //* on les stocke également dans le state
            store.dispatch(insertTokenToState(response.data.token, response.data.data));

            // on affiche le modal success
            store.dispatch(setModalSuccess(true));

            //* on clear le formulaire de signup
            store.dispatch(clearLoginForm());
          })
          .catch((error) => {
            console.log('error', error)

            // on affiche le modal error
            store.dispatch(setModalError(true));
          });
    }
      next(action);
      break;
    
    case LOGOUT: {

      //* on vide le state et le localstorage
      store.dispatch(clearState());
      localStorage.clear();
    }
      next(action);
      break;

    case UPDATE_USER_INFOS: {

      //* on récupère le current user du state
      const { user : { currentUser : { data } } } = store.getState();

      //* on fait la requête PATCH API
      axios
        .patch(`${finalURL}/api/secure/user/update/${data.id}`, data) 
        .then((response) => {
          console.log('response', response)

          //* on met l'user modifié en localstorage
          const userData = JSON.stringify(data)
          localStorage.setItem('userData', userData);
        })
        .catch((error) => {
          console.log('error', error)
        });
    }
      next(action);
      break;

    case DELETE_USER_INFOS: {

      //* on récupère l'ID du current user du state
      const { user : { currentUser : { data : { id } } } } = store.getState();

      //* on fait la requête DELETE API
      axios
        .delete(`${finalURL}/api/secure/user/delete/${id}`) 
        .then((response) => {
          console.log('response', response)
          
          //* on vide le state et le localstorage
          store.dispatch(clearState());
          localStorage.clear();
          // store.dispatch(setModalSuccess(true));

        })
        .catch((error) => {
          console.log('error', error)
        });
    }
      next(action);
      break;

    default:
      next(action);
  }
};

export default userMiddleware;
