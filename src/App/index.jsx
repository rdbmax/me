import React from 'react';
import withConnect from './withConnect';
import Sidebar from './Sidebar/index.jsx';

const App = ({ setPage }) => (
  <div>
    <Sidebar />
    <h1>Home Page</h1>
  </div>
);

export default withConnect(App);
