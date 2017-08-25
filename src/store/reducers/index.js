/* eslint-disable no-underscore-dangle */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import url from './url';

const history = createHistory();

const routesMap = {
  HOME: '/',
  EDUCATION: '/education',
};

const {
  reducer: location,
  middleware: locationMiddleware,
  enhancer,
} = connectRoutes(history, routesMap);

const middlewares = applyMiddleware(locationMiddleware);

const composed = [enhancer, middlewares];

if (window.__REDUX_DEVTOOLS_EXTENSION__)
  composed.push(window.__REDUX_DEVTOOLS_EXTENSION__());

export default createStore(
  combineReducers({ url, location }),
  compose(...composed),
);
