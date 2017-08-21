import React from 'react';
import withConnect from './withConnect';

const App = ({ setPage }) => {
  console.log('setPage', setPage);
  setPage('home');
  return (
    <h1>Hello, world!</h1>
  );
};

export default withConnect(App);
