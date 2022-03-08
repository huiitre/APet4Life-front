import axios from 'axios';
// import { useDispatch } from 'react-redux';
import { setLoadingSpinner } from '../actions/associations';

//* import des actions
import {
  SEND_SIGN_UP,
  LOGIN,
  LOGOUT,
  insertTokenToState,
  clearSignupForm,
  setModalSuccess,
  clearState,
} from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {

  const devURL = 'http://localhost:3000';
  const prodURL = 'http://morgane-rabiller-server.eddi.cloud';
  //* venir changer ici, si url de dev ou url de prod
  const finalURL = devURL;
  switch (action.type) {
    case SEND_SIGN_UP:
      store.dispatch(setLoadingSpinner());
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
          store.dispatch(setLoadingSpinner());
          //* on lance le modal
          store.dispatch(setModalSuccess(true));
          //* on clear le formulaire de signup
          store.dispatch(clearSignupForm());
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

          })
          .catch((error) => {
            console.log('error', error)
          });
        }
        next(action);
        break;
    
    case LOGOUT : {

      //* on vide le state et le localstorage
      store.dispatch(clearState());
      localStorage.clear();
    }

    default:
      next(action);
  }
};

export default userMiddleware;
