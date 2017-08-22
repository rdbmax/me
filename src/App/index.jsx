import React from 'react';
import withConnect from './withConnect';
import Sidebar from './Sidebar/index.jsx';

const App = ({ setPage }) => {
  console.log('setPage', setPage);
  setPage('home');
  return (
    <div>
      <Sidebar />
      <h1>Hello, world!</h1>
    </div>
  );
};

export default withConnect(App);
