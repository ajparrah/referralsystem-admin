import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

export const PublicRoute = ({ isAuthenticated, component:ComponentToValidate, ...rest}) => {
  return (
    <Route
      {...rest}
      component={(props) => {
          return (!isAuthenticated)
          ? (<ComponentToValidate {...props} />)
          : (<Redirect to="/" />)
        }
      }
    />
  );
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component:  PropTypes.func.isRequired,
};

export default PublicRoute;
