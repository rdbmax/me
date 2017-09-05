import React from 'react';
import withConnect from './withConnect';

const Home = ({ connectRequest, logoutRequest, isUserLoggedIn }) => (
  <div>
    <p>Home</p>
    <Choose>
      <When condition={isUserLoggedIn}>
        <button onClick={logoutRequest}>logout linkedin</button>
      </When>
      <Otherwise>
        <button onClick={connectRequest}>Connect linkedin</button>
      </Otherwise>
    </Choose>
  </div>
);

export default withConnect(Home);
