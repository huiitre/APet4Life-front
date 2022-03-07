import axios from 'axios';
import { setLoadingSpinner } from '../actions/associations';

//* import des actions
import { clearSignupForm, SEND_SIGN_UP, setModalSuccess } from '../actions/user';

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
  
    default:
      next(action);
  }
};

export default userMiddleware;
