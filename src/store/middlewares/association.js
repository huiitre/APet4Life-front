import axios from 'axios';
import {
  SEND_SEARCH_QUERY_BY_ZIPCODE,
  SEND_SEARCH_QUERY_BY_DEPARTMENT,
  SEND_SEARCH_QUERY_BY_REGION,
} from '../actions/associations';

const associationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_SEARCH_QUERY_BY_ZIPCODE:
      // const state = store.getState();
      // const { zipcode } = state.associations;
      // console.log(zipcode);
      axios.get('http://localhost:3000/api/user/search', {
        zipcode,
      })
        .then((response) => {
          console.log('success', response);
        })
        .catch((error) => {
          console.log('error', error);
        });

      next(action);
      break;

    case SEND_SEARCH_QUERY_BY_DEPARTMENT:

      { const state = store.getState();
        const { associations: { formAssoc: { department } } } = state;
        console.log(`on est dans le middleware region: ${region}`);

        axios.get('http://localhost:3000/api/user/search', {
          department,
        })
          .then((response) => {
            console.log('success', response);
          })
          .catch((error) => {
            console.log('error', error);
          }); }

      next(action);
      break;

    case SEND_SEARCH_QUERY_BY_REGION:
      { const state = store.getState();
        const { associations: { formAssoc: { region } } } = state;
        console.log(`on est dans le middleware region: ${region}`);

        axios.get('http://localhost:3000/api/user/search', {
          region,
        })
          .then((response) => {
            console.log('success', response);
          })
          .catch((error) => {
            console.log('error', error);
          }); }

      next(action);
      break;

    default:
      next(action);
  }
};

export default associationMiddleware;
