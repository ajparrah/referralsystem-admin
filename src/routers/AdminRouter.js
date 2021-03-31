import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import CreatePageScreen from '../screens/CreatePageScreen';
import DetailScreen from '../screens/DetailScreen';

const AdminRouter = () => {
  return (
    <>
      <div>
        <Link to="/jose" />
        <Switch>
          <Route exact path="/" component={CreatePageScreen} />
          <Route exact path="/:name" component={DetailScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};

export default AdminRouter;
