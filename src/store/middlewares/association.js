import axios from 'axios';
import {
  // SEND_SEARCH_QUERY,
} from '../actions/associations';

const associationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
   // case SEND_SEARCH_QUERY: //! A MODIFIER en fonction
      // axios.get('http://localhost:3001/ ROUTE BACK', {
      //   region,
      //   dept,
      //   zipcode,
      // })
      // .then((response) => {
      //   console.log('success', response);
      // })
      // .catch((error) => {
      //   console.log('error', error);
      // });

      next(action);
      break;
    default:
      next(action);
  }
};

export default associationMiddleware;
