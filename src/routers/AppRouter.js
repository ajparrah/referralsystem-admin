import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CreatePageScreen from '../screens/CreatePageScreen';
import DetailScreen from '../screens/DetailScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

const AppRouter = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={CreatePageScreen} />
            <Route exact path="/:name" component={DetailScreen} />
            <Route exact path="/link/404" component={NotFoundScreen} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
