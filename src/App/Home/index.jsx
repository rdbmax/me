import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import withConnect from './withConnect';

const styles = StyleSheet.create({
  homeLabel: {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px',
  },
});

const Home = ({ connectRequest, logoutRequest, isUserLoggedIn }) => (
  <div>
    <p className={css(styles.homeLabel)}>Home</p>
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
