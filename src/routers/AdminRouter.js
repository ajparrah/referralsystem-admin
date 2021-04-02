import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import NotFoundScreen from '../screens/NotFoundScreen';
import CreatePageScreen from '../screens/CreatePageScreen';
import DetailScreen from '../screens/DetailScreen';

const AdminRouter = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/" component={CreatePageScreen} />
          <Route exact path="/:name" component={DetailScreen} />
          <Route exact path="/link/404" component={NotFoundScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};

export default AdminRouter;
