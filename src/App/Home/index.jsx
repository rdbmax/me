import React from 'react';
import withConnect from './withConnect';

const Home = () => (
  <div>
    <p>Home</p>
    <p>You will be able to connect with linkedin here... soon</p>
  </div>
);

export default withConnect(Home);
