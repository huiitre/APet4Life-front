/* eslint-disable spaced-comment */
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  SEND_SEARCH_QUERY_BY_ZIPCODE,
  SEND_SEARCH_QUERY_BY_DEPARTMENT,
  SEND_SEARCH_QUERY_BY_REGION,
  insertSearchResultToState,
} from '../actions/associations';

// const navigate = useNavigate();
const associationMiddleware = (store) => (next) => (action) => {
  // const history = useHistory();

  const devURL = 'http://localhost:3000';
  const prodURL = 'http://morgane-rabiller-server.eddi.cloud';
  const finalURL = prodURL;

  switch (action.type) {
    //todo recherche assoc par code postal
    case SEND_SEARCH_QUERY_BY_ZIPCODE:
      {
        const {
          associations: {
            formAssoc: { zipcode },
          },
        } = store.getState();

        const config = {
          geolocation: 'zipcode',
          responseLocation: zipcode,
        };

        axios
          .post(`${finalURL}/api/user/search`, config)
          .then((response) => {
            store.dispatch(insertSearchResultToState(response.data));
          })
          .catch((error) => {
            console.log('error', error);
          });
      }
      next(action);
      break;

    //todo recherche assoc par département
    case SEND_SEARCH_QUERY_BY_DEPARTMENT:
      {
        const {
          associations: {
            formAssoc: { department },
          },
        } = store.getState();

        const config = {
          geolocation: 'department',
          responseLocation: department,
        };

        axios
          .post(`${finalURL}/api/user/search`, config)
          .then((response) => {
            store.dispatch(insertSearchResultToState(response.data));
          })
          .catch((error) => {
            console.log('error', error);
          });
      }
      next(action);
      break;

    //todo recherche assoc par région
    case SEND_SEARCH_QUERY_BY_REGION:
      {
        const {
          associations: {
            formAssoc: { region },
          },
        } = store.getState();

        const config = {
          geolocation: 'region',
          responseLocation: region,
        };

        axios
          .post(`${finalURL}/api/user/search`, config)
          .then((response) => {
            store.dispatch(insertSearchResultToState(response.data));
          })
          .catch((error) => {
            console.log('error', error);
          });
      }
      next(action);
      break;

    default:
      next(action);
  }
};

export default associationMiddleware;
