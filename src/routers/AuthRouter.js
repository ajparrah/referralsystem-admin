import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthRouter = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </>
  );
};

export default AuthRouter;
