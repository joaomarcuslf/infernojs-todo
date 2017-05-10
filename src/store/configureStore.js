import { createStore, applyMiddleware, compose } from 'redux';
import * as thunk from "redux-thunk";
import createLogger from 'redux-logger';
import reducers from '../reducers';

const initialState = {};

const middleware = compose(
  applyMiddleware(
    thunk.default,
    createLogger,
  ),
  (window.devToolsExtension? window.devToolsExtension(): (f) => f),
);

const configureStore = () => createStore(
  reducers,
  initialState,
  middleware,
 );


export default configureStore;