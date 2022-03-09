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
  SET_FIELD_VALUE_PROFILE_FORM,
  SET_TYPE_SIGNUP_FORM,
  CHANGE_LOGIN_FORM_DISPLAY,
  INSERT_TOKEN_TO_STATE,
  CLEAR_STATE,
  SET_MODAL_SUCCESS,
  OPEN_MODAL,
  CLEAR_SIGNUP_FORM,
  CLEAR_LOGIN_FORM,
  CHANGE_EDITION_MODE,
  SET_CURRENT_USER,
  SET_LOADING_SPINNER_USER,
} from '../actions/user';

import { SET_LOADING_SPINNER } from '../actions/associations';

//* state initial
export const initialState = {
  contactAssoc: {
    isOpen: false,
  },
  signup: {
    loading: false,
    // modalSuccess: false,
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
  spinner: false,
  currentUser: { 
    data: {},
    token: '',
  },
  profile: {
    editionMode: false,
  },
  modalSuccess: false,
  modalDeleteOpen: false,
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
    case SET_FIELD_VALUE_PROFILE_FORM: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          data: {
            ...state.currentUser.data,
            [action.name]: action.value,
          }
        }
      };
    }
    case SET_CURRENT_USER: {
      return {
        ...state,
        userLogged: true,
        currentUser: {
          ...state.currentUser,
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
          token: action.token,
          data: action.data,
        },
        loginForm: {
          ...state.loginForm,
          isOpen: false,
        },
        userLogged: true,
      }
    }
    case CLEAR_STATE: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          token: "",
          data: {},
        },
        userLogged: false,
      }
    }
    case SET_LOADING_SPINNER_USER: {
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: !state.signup.loading,
        }
      };
    }
    // case SET_MODAL_SUCCESS: {
    //   return {
    //     ...state,
    //     signup: {
    //       ...state.signup,
    //       modalSuccess: action.bool,
    //     }
    //   };
    // }
    case SET_MODAL_SUCCESS: {
      return {
        ...state,
        modalSuccess: action.bool,
      };
    }
    case OPEN_MODAL: {
      return {
        ...state,
        modalDeleteOpen: action.bool,
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
        },
      };
    }
    case CLEAR_LOGIN_FORM: {
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          mail: '',
          password: '',
        },
      };
    }
    case CHANGE_EDITION_MODE: {
      return {
        ...state,
        profile: {
          ...state.profile,
          editionMode: !state.profile.editionMode,
        }
      }
    }
    default:
      return state;
  }
};

export default reducer;
