/* eslint-disable spaced-comment */
import axios from 'axios';

//* import des actions
import {
  SEND_SEARCH_QUERY_BY_ZIPCODE,
  SEND_SEARCH_QUERY_BY_DEPARTMENT,
  SEND_SEARCH_QUERY_BY_REGION,
  insertSearchResultToState,
} from '../actions/associations';

//* MIDDLEWARE gérant l'envoi de la requête de recherche (par zipcode OU département OU region)

const associationMiddleware = (store) => (next) => (action) => {
  const devURL = 'http://localhost:3000';
  const prodURL = 'http://morgane-rabiller-server.eddi.cloud';
  //* venir changer ici, si url de dev ou url de prod
  const finalURL = devURL;

  switch (action.type) {
    //todo recherche assoc par code postal
    case SEND_SEARCH_QUERY_BY_ZIPCODE:
      {
        //* récupération du zipcode depuis le state
        const {
          associations: {
            formAssoc: { zipcode },
          },
        } = store.getState();

        //* objet envoyé à l'API
        const config = {
          geolocation: 'zipcode',
          responseLocation: zipcode,
        };

        //* route en POST pouvant envoyer un body (config)
        //* puis envoi des données récupérées dans le state
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
        //* récupération du département depuis le state
        const {
          associations: {
            formAssoc: { department },
          },
        } = store.getState();

        //* objet envoyé à l'API
        const config = {
          geolocation: 'department',
          responseLocation: department,
        };

        //* route en POST pouvant envoyer un body (config)
        //* puis envoi des données récupérées dans le state
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
        //* récupération du region depuis le state
        const {
          associations: {
            formAssoc: { region },
          },
        } = store.getState();

        //* objet envoyé à l'API
        const config = {
          geolocation: 'region',
          responseLocation: region,
        };

        //* route en POST pouvant envoyer un body (config)
        //* puis envoi des données récupérées dans le state
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
