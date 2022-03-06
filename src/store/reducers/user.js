//* import des actions
import { CHANGE_FORM_SIGNUP_STATUS, FORM_CONTACT_IS_OPEN, SET_TYPE_SIGNUP_FORM } from '../actions/user';

//* state initial
export const initialState = {
  contactAssoc: {
    isOpen: false,
  },
  signup: {
    status: 1,
    userType: '',
  }
};

//* SLICE USER du reducer gérant :
//*   l'ouverture/la fermeture du formulaire de contact de la page association
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FORM_CONTACT_IS_OPEN: {
      return {
        ...state,
        contactAssoc: {
          ...state.contactAssoc,
          isOpen: !state.contactAssoc.isOpen,
        },
      };
    }
    case SET_TYPE_SIGNUP_FORM: {
      return {
        ...state,
        signup: {
          ...state.signup,
          userType: action.userType,
        },
      };
    }
    case CHANGE_FORM_SIGNUP_STATUS: {
      return {
        ...state,
        signup: {
          ...state.signup,
          status: action.status,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
