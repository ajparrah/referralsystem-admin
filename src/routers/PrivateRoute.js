import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

const PrivateRoute = ({ children, userIsLogged }) =>
  userIsLogged ? children : <Redirect to="/auth/login" />;

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired,
  userIsLogged: PropTypes.bool,
};

export default PrivateRoute;
