import React from 'react';
import PropTypes from 'prop-types';
// Utils

const Main = ({ children }) => (
  <React.Fragment>
    {children}
  </React.Fragment>
);

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;