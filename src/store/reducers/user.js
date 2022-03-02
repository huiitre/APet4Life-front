//* import des actions
import { FORM_CONTACT_IS_OPEN } from '../actions/user';

//* state initial
export const initialState = {
  contactAssoc: {
    isOpen: false,
  },
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

    default:
      return state;
  }
};

export default reducer;
