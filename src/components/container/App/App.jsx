import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from 'components/common/PrivateRoute';

import Auth from '../Auth';
import Home from '../Home';


const App = () =>
  (
    <HashRouter>
      <Switch>
        <PrivateRoute path="/auth" component={Auth} />
        <PrivateRoute path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </HashRouter>
  );


export default hot(module)(App);
