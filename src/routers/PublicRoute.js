import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

const PublicRoute = ({ userIsLogged, component }) =>
  !userIsLogged ? (
    <Route path="/login" component={component} />
  ) : (
    <Redirect to="/" />
  );

PublicRoute.propTypes = {
  userIsLogged: PropTypes.any,
  component: PropTypes.func.isRequired,
};

export default PublicRoute;
