import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailScreen from '../screens/DetailScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import AdminRouter from './AdminRouter';
import AuthRouter from './AuthRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const { info } = useSelector((state) => state.user);
  const isLogged = info ? true : false;
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/:name" component={DetailScreen} />
            <Route exact path="/link/404" component={NotFoundScreen} />
            <PublicRoute
              path="/auth"
              isAuthenticated={isLogged}
              component={AuthRouter}
            />
            <PrivateRoute userIsLogged={isLogged}>
              <AdminRouter />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
