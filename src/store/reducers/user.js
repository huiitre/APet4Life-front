//* import des actions
import { 
  FORM_CONTACT_IS_OPEN,
  CHANGE_LOGIN_FORM_DISPLAY
} from '../actions/user';

//* state initial
export const initialState = {
  contactAssoc: {
    isOpen: false,
  },
  loginForm: {
    isOpen: false,
    login: '',
    password: '',
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
    case CHANGE_LOGIN_FORM_DISPLAY: {
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          isOpen: !state.loginForm.isOpen,
        }
      }
    }

    default:
      return state;
  }
};

export default reducer;
