import React from 'react';
import PropTypes from 'prop-types';
import withConnect from './withConnect';
import Sidebar from './Sidebar/index.jsx';
import Home from './Home/index.jsx';
import Education from './Education/index.jsx';

const App = ({ page }) => (
  <div>
    <Sidebar />
    <Choose>
      <When condition={(page === 'HOME')}>
        <Home />
      </When>
      <When condition={(page === 'EDUCATION')}>
        <Education />
      </When>
    </Choose>
  </div>
);

App.propTypes = {
  page: PropTypes.string.isRequired,
};

export default withConnect(App);
