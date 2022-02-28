import { createStore, compose, applyMiddleware } from 'redux';
import reducer from 'src/store/reducers';
import locationMiddleware from './middlewares/location';
import associationMiddleware from './middlewares/association';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  locationMiddleware,
  associationMiddleware,
];

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares),
);

const store = createStore(reducer, enhancers);

export default store;
