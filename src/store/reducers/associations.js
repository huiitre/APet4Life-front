/* eslint-disable spaced-comment */

//* import des actions
import {
  SET_DEPARTMENT,
  SET_REGION,
  SET_ZIPCODE,
  INSERT_SEARCH_RESULT_TO_STATE,
  SET_LOADING_SPINNER,
} from '../actions/associations';
import {
  INSERT_DEPARTMENTS_TO_STATE,
  INSERT_REGIONS_TO_STATE,
} from '../actions/location';

//* state initial
export const initialState = {
  //? loading pour le spinner
  loading: false,
  //? résultat de recherche des assocs
  assocList: [],
  //? liste des régions depuis api.gouv
  regionsList: [],
  //? list des départements depuis api.gouv
  departmentList: [],
  formAssoc: {
    //? formulaire contact assoc
    isOpen: false,
    //? input recherche par region
    region: '',
    //? input recherche par departement
    department: '',
    //? input recherche par zipcode
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

    //* l'insertion du zipcode OU département OU région choisi par l'utilisateur
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

    //* l'insertion de la liste des associations (résultat retour API)
    case INSERT_SEARCH_RESULT_TO_STATE: {
      return {
        ...state,
        assocList: action.assocList,
        formAssoc: {
          ...state,
          //* à chaque insertion d'un résultat dans le state, on vide les champs de recherche
          region: '',
          department: '',
          zipcode: '',
        },
        //* on cache le spinner
        loading: false,
      };
    };

    case SET_LOADING_SPINNER: {
      return {
        ...state,
        loading: !state.loading,
      };
    }

    default:
      return state;
  }
};

export default reducer;
