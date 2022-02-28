/* eslint-disable spaced-comment */
import { SET_DEPARTMENT, SET_REGION, SET_ZIPCODE } from '../actions/associations';
import { INSERT_DEPARTMENTS_TO_STATE, INSERT_REGIONS_TO_STATE } from '../actions/location';

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

// A noter : pour le reducer recipesReducer, seule la tranche recipes est visible !
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export default reducer;
