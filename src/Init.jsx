import React from 'react';
import { Provider } from 'react-redux';
import store from './store/reducers';
import App from 'App/index.jsx';

const Init = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Init;
