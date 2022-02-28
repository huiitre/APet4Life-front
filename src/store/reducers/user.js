import { FORM_CONTACT_IS_OPEN } from '../actions/user';

export const initialState = {
  contactAssoc: {
    isOpen: false,
  },
};

// A noter : pour le reducer recipesReducer, seule la tranche recipes est visible !
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

    default:
      return state;
  }
};

export default reducer;
