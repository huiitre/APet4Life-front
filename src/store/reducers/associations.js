import { INSERT_REGIONS_TO_STATE } from '../actions/location';

export const initialState = {
  assocList: [],
  regionsList: [],
  deptsList: [],
  formAssoc: {
    isOpen: false,
    region: '',
    dept: '',
    zipCode: '',
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

    default:
      break;
  }
  return state;
};

export default reducer;
