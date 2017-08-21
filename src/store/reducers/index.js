/* eslint-disable no-underscore-dangle */
import { combineReducers, createStore } from 'redux';
import url from './url';

export default createStore(
    combineReducers({ url }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
