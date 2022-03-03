/* eslint-disable spaced-comment */

//* import des actions
import {
  SET_DEPARTMENT,
  SET_REGION,
  SET_ZIPCODE,
  INSERT_SEARCH_RESULT_TO_STATE,
  EMPTY_STATE_LAST_SEARCH,
} from '../actions/associations';
import {
  INSERT_DEPARTMENTS_TO_STATE,
  INSERT_REGIONS_TO_STATE,
} from '../actions/location';

//* state initial
export const initialState = {
  assocList: [],
  regionsList: [],
  departmentList: [],
  formAssoc: {
    isOpen: false,
    region: '',
    department: '',
    zipcode: '',
  },
};

//* SLICE ASSOCIATIONS du reducer gérant :
//*   l'insertion des régions et départements dans le state
//*   l'insertion du zipcode OU département OU région choisi par l'utilisateur
//*   l'insertion de la liste des associations (résultat retour API)

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    //*   l'insertion des régions et départements dans le state
    case INSERT_REGIONS_TO_STATE: {
      return {
        ...state,
        regionsList: action.regionsList,
      };
    }
    case INSERT_DEPARTMENTS_TO_STATE: {
      return {
        ...state,
        departmentList: action.departmentList,
      };
    }

    //*   l'insertion du zipcode OU département OU région choisi par l'utilisateur
    case SET_REGION: {
      return {
        ...state,
        formAssoc: {
          ...state.formAssoc,
          region: action.region,
        },
      };
    }
    case SET_DEPARTMENT: {
      return {
        ...state,
        formAssoc: {
          ...state.formAssoc,
          department: action.department,
        },
      };
    }
    case SET_ZIPCODE: {
      return {
        ...state,
        formAssoc: {
          ...state.formAssoc,
          [action.name]: action.value,
        },
      };
    }

    //*   l'insertion de la liste des associations (résultat retour API)
    case INSERT_SEARCH_RESULT_TO_STATE: {
      return {
        ...state,
        assocList: action.assocList,
      };
    }

    //* action qui vide la liste des associations enregistrés dans le state, et la dernière recherche effectuée
    case EMPTY_STATE_LAST_SEARCH: {
      return {
        ...state,
        assocList: [],
        formAssoc: {
          ...state.formAssoc,
          region: '',
          department: '',
          zipcode: '',
        }
      };
    }

    default:
      return state;
  }
};

export default reducer;
