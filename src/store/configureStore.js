import { createStore, applyMiddleware } from 'redux';
import * as thunk from "redux-thunk";
import createLogger from 'redux-logger';
import reducers from '../reducers';

const initialState = {};

const configureStore = () => createStore(
  reducers,
  initialState,
  applyMiddleware(
    thunk.default,
    createLogger,
  )
);


export default configureStore;