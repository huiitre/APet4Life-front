import axios from 'axios';
import {
  insertDeptsToState, insertRegionsToState, LOAD_DEPTS_FROM_API, LOAD_REGIONS_FROM_API,
} from '../actions/location';

const locationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_REGIONS_FROM_API:
      axios
        .get('https://geo.api.gouv.fr/regions')
        .then((response) => {
          store.dispatch(insertRegionsToState(response.data));
        });
      next(action);
      break;

    case LOAD_DEPTS_FROM_API:
      axios
        .get('https://geo.api.gouv.fr/departements')
        .then((response) => {
          store.dispatch(insertDeptsToState(response.data));
        });
      next(action);
      break;

    default:
      next(action);
  }
};

export default locationMiddleware;
