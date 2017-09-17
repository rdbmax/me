/* eslint-disable no-underscore-dangle */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import { baseUrl } from 'config';
import url from './url';
import user from './user';
import linkedinSaga from '../sagas/linkedinSaga';

const history = createHistory({ basename: baseUrl });

const routesMap = {
  HOME: '/',
  EDUCATION: '/education',
};

const {
  reducer: location,
  middleware: locationMiddleware,
  enhancer,
} = connectRoutes(history, routesMap);

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(locationMiddleware, sagaMiddleware);

const composed = [enhancer, middlewares];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  composed.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default createStore(
  combineReducers({ url, user, location }),
  compose(...composed),
);

sagaMiddleware.run(linkedinSaga);
