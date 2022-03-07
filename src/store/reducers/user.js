//* import des actions
import {
  INSERT_DEPARTMENTS_TO_STATE,
  INSERT_REGIONS_TO_STATE
} from '../actions/location';

import {
  CHANGE_FORM_SIGNUP_STATUS,
  FORM_CONTACT_IS_OPEN,
  SET_FIELD_VALUE_SIGNUP_FORM,
  SET_FIELD_VALUE_LOGIN_FORM,
  SET_TYPE_SIGNUP_FORM,
  CHANGE_LOGIN_FORM_DISPLAY,
  INSERT_TOKEN_TO_STATE,
  LOGOUT,
  SET_MODAL_SUCCESS,
  CLEAR_SIGNUP_FORM,
} from '../actions/user';

import { SET_LOADING_SPINNER } from '../actions/associations';

//* state initial
export const initialState = {
  contactAssoc: {
    isOpen: false,
  },
  signup: {
    loading: false,
    modalSuccess: false,
    status: 1,
    regionList: [],
    departmentList: [],
    userType: '',
    mail: '',
    password: '',
    passwordConfirm: '',
    region: '',
    department: '',
    name: '',
    firstname: '',
    lastname: '',
    picture: 'https://placekitten.com/500/600',
  },
  loginForm: {
    isOpen: false,
    mail: '',
    password: '',
  },
  userLogged: false,
  currentUser: { 
    JWTtoken:'',
    name:'Audrey',
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
    case INSERT_REGIONS_TO_STATE: {
      return {
        ...state,
        signup: {
          ...state.signup,
          regionList: action.regionsList,
        }
      };
    }
    case INSERT_DEPARTMENTS_TO_STATE: {
      return {
        ...state,
        signup: {
          ...state.signup,
          departmentList: action.departmentList,
        }
      };
    }
    case SET_FIELD_VALUE_SIGNUP_FORM: {
      return {
        ...state,
        signup: {
          ...state.signup,
          [action.name]: action.value,
        }
      };
    }
    case SET_FIELD_VALUE_LOGIN_FORM: {
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [action.name]: action.value,
        }
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
    case INSERT_TOKEN_TO_STATE: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          JWTtoken: action.JWTtoken,
        },
        loginForm: {
          ...state.loginForm,
          isOpen: false,
        },
        userLogged: true,
      }
    }
    case LOGOUT: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          JWTtoken:'',
          name:'',
        },
        userLogged: false,
      }
    }
    case SET_LOADING_SPINNER: {
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: !state.signup.loading,
        }
      };
    }
    case SET_MODAL_SUCCESS: {
      return {
        ...state,
        signup: {
          ...state.signup,
          modalSuccess: action.bool,
        }
      };
    }
    case CLEAR_SIGNUP_FORM: {
      return {
        ...state,
        signup: {
          ...state.signup,
          status: 1,
          userType: '',
          mail: '',
          password: '',
          passwordConfirm: '',
          region: '',
          department: '',
          name: '',
          firstname: '',
          lastname: '',
        }
      };
    }
    default:
      return state;
  }
};

export default reducer;
