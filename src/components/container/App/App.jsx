import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Auth from '../Auth';

const App = () => (
  <HashRouter>
    <Switch>
      <Route component={Auth}></Route>
    </Switch>
  </HashRouter>
);

export default hot(module)(App);
