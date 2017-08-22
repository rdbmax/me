import React from 'react';
import Link from 'redux-first-router-link';
import withConnect from './withConnect';

const Sidebar = () => (
  <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/education">Education</Link></li>
  </ul>
);

export default withConnect(Sidebar);
