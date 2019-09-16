import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => <Fragment>{children}</Fragment>;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Layout.defaultProps = {
  children: []
};

export default Layout;
