import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter, Switch } from 'react-router-dom';
import PrivateRoute from 'components/common/PrivateRoute';

import Auth from '../Auth';
import Home from '../Home';


const App = () =>
  (
    <HashRouter>
      <Switch>
        <PrivateRoute path="/auth" component={Auth} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </HashRouter>
  );


export default hot(module)(App);
