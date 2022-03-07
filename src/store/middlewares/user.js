import axios from 'axios';

//* import des actions
import {
  SEND_SIGN_UP,
  LOGIN,
  insertTokenToState,
} from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  const devURL = 'http://localhost:3000';
  const prodURL = 'http://morgane-rabiller-server.eddi.cloud';
  //* venir changer ici, si url de dev ou url de prod
  const finalURL = devURL;
  console.log(action);
  switch (action.type) {
    case SEND_SIGN_UP:
      console.log('heree');
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
          console.log(response);
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
            console.log('success', response.data.token)
            store.dispatch(insertTokenToState(response.data.token));
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
