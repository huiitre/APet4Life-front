import { createStore, compose, applyMiddleware } from 'redux';
import reducer from 'src/store/reducers';
import locationMiddleware from './middlewares/location';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  locationMiddleware,
];

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares),
);

const store = createStore(reducer, enhancers);

export default store;
