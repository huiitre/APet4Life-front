export const initialState = {
  assocList: [],
  formAssoc: {
    isOpen: false,
    region: '',
    dept: '',
    zipCode: '',
  },
};

// A noter : pour le reducer recipesReducer, seule la tranche recipes est visible !
const reducer = (state = initialState, action = {}) => {
};

export default reducer;
