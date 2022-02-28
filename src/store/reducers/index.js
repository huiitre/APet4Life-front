import { combineReducers } from 'redux';
// import { bindActionCreators } from 'redux';
// à ajouter/comprendre si besoin (chatroom de julien)

//* on importe nos différents reducers (slices)
import associationsReducer from './associations';
import userReducer from './user';

const rootReducer = combineReducers({
  associations: associationsReducer,
  user: userReducer,
});

export default rootReducer;

/* const stateTest = {

  user: {
    userInfo: [],
    token: '',
    formSignIn: {
      mail: '',
      password: '',
    },
  },

  associations: {
    assocList: [],
    formAssoc: {
      region: '',
      dept: '',
      zipCode: '',
    },
  },
}; */
