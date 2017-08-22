import React from 'react';
import withConnect from './withConnect';

const Sidebar = ({ currentPage }) => (
  <div>{ currentPage }</div>
);

Sidebar.defaultProps = {
  currentPage: 'hello',
};

export default withConnect(Sidebar);
