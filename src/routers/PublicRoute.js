import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

const PublicRoute = ({ children, userIsLogged }) =>
  !userIsLogged ? children : <Redirect to="/" />;

PublicRoute.propTypes = {
  children: PropTypes.object.isRequired,
  userIsLogged: PropTypes.any,
};

export default PublicRoute;
