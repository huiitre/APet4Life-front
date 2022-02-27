/* eslint-disable spaced-comment */
import { SET_DEPT, SET_REGION, SET_ZIPCODE_FIELD_VALUE } from '../actions/associations';
import { INSERT_DEPTS_TO_STATE, INSERT_REGIONS_TO_STATE } from '../actions/location';

export const initialState = {
  assocList: [],
  regionsList: [],
  deptsList: [],
  formAssoc: {
    isOpen: false,
    region: '',
    codeRegion: 0, //? pas obligatoire de stocker le code région dans le state je pense
    dept: '',
    zipcode: '',
  },
};

// A noter : pour le reducer recipesReducer, seule la tranche recipes est visible !
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INSERT_REGIONS_TO_STATE: {
      return {
        ...state,
        regionsList: action.regionsList,
      };
    }
    case INSERT_DEPTS_TO_STATE: {
      return {
        ...state,
        deptsList: action.deptsList,
      };
    }
    case SET_REGION: {
      return {
        ...state,
        formAssoc: {
          ...state.formAssoc,
          region: action.region,
          codeRegion: action.codeRegion,
          dept: '',
        },
      };
    }
    case SET_DEPT: {
      return {
        ...state,
        formAssoc: {
          ...state.formAssoc,
          dept: action.dept,
        },
      };
    }
    case SET_ZIPCODE_FIELD_VALUE: {
      return {
        ...state,
        formAssoc: {
          ...state.formAssoc,
          [action.name]: action.value,
        }
      };
    }

    default:
      break;
  }
  return state;
};

export default reducer;
