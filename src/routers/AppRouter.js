import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AdminRouter from './AdminRouter';
import AuthRouter from './AuthRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const { info } = useSelector((state) => state.user);
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <PublicRoute userIsLogged={info}>
              <AuthRouter />
            </PublicRoute>
            <PrivateRoute path="/" userIsLogged={info}>
              <AdminRouter />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
