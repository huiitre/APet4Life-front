/* eslint-disable spaced-comment */
import axios from 'axios';

//* import des actions
import {
  SEND_SEARCH_QUERY_BY_ZIPCODE,
  SEND_SEARCH_QUERY_BY_DEPARTMENT,
  SEND_SEARCH_QUERY_BY_REGION,
  insertSearchResultToState,
  setLoadingSpinner,
  SET_ALL_ASSOCIATIONS_FROM_API,
  insertAllAssociationsOnState,
  LOAD_ASSOC_BY_SLUG,
  insertAssocBySlugOnState,
  setLoadingSlug,
  setIsEmpty,
} from '../actions/associations';

//* MIDDLEWARE gérant l'envoi de la requête de recherche (par zipcode OU département OU region)
const associationMiddleware = (store) => (next) => (action) => {
  //* venir changer ici, si url de dev ou url de prod
  console.log('environnement : ', process.env.NODE_ENV);
  // console.log('api_url : ', process.env.REACT_APP_API_URL);
  // const finalURL = process.env.REACT_APP_API_URL;
  let finalURL = '';
  if (process.env.NODE_ENV === "development") {
    finalURL = 'http://localhost:3000';
  } else {
    finalURL = 'http://backoffice.apet4life.huiitre.fr';
  }

  console.log('finalURL', finalURL);
  console.log('api_url_env', process.env.REACT_APP_API_URL);

  switch (action.type) {
    //todo recherche assoc par code postal
    case SEND_SEARCH_QUERY_BY_ZIPCODE:
      {
        //* on lance le loading
        store.dispatch(setLoadingSpinner());
        
        //* récupération du zipcode depuis le state
        const {
          associations: {
            formAssoc: { zipcode },
          },
        } = store.getState();

        //* objet envoyé à l'API
        const config = {
          params: {
            geolocation: 'zipcode',
            responselocation: zipcode,
          },
        };

        //* route en POST pouvant envoyer un body (config)
        //* puis envoi des données récupérées dans le state
        axios
          .get(`${finalURL}/api/user/search`, config)
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
        //* on lance le loading
        store.dispatch(setLoadingSpinner());

        //* récupération du département depuis le state
        const {
          associations: {
            formAssoc: { department },
          },
        } = store.getState();

        //* objet envoyé à l'API
        const config = {
          params: {
            geolocation: 'department',
            responselocation: department,
          },
        };

        //* route en POST pouvant envoyer un body (config)
        //* puis envoi des données récupérées dans le state
        axios
          .get(`${finalURL}/api/user/search`, config)
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
        //* on lance le loading
        store.dispatch(setLoadingSpinner());

        //* récupération du region depuis le state
        const {
          associations: {
            formAssoc: { region },
          },
        } = store.getState();

        //* objet envoyé à l'API
        const config = {
          params: {
            geolocation: 'region',
            responselocation: region,
          },
        };

        //* route en POST pouvant envoyer un body (config)
        //* puis envoi des données récupérées dans le state
        axios
          .get(`${finalURL}/api/user/search`, config)
          .then((response) => {
            store.dispatch(insertSearchResultToState(response.data));
          })
          .catch((error) => {
            console.log('error', error);
          });
      }
      next(action);
      break;

      case SET_ALL_ASSOCIATIONS_FROM_API:
        store.dispatch(setLoadingSpinner());
        axios
          .get(`${finalURL}/api/user/associations`)
          .then((response) => {
            store.dispatch(insertAllAssociationsOnState(response.data));
          });
        next(action);
        break;

      case LOAD_ASSOC_BY_SLUG:
        store.dispatch(setLoadingSlug(true));
        store.dispatch(setIsEmpty(false));
        axios
          .get(`${finalURL}/api/user/association/${action.slug}`)
          .then((response) => {
            if (response.data.length === 0) {
              store.dispatch(setIsEmpty(true));
            } else {
              console.log('pas vide');
              store.dispatch(insertAssocBySlugOnState(response.data[0]));
              store.dispatch(setIsEmpty(false));
            }
          });
        next(action);
        break;

    default:
      next(action);
  }
};

export default associationMiddleware;
