import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from '../Home';

const App = () => (
  <HashRouter>
    <Switch>
      <Route component={Home}></Route>
    </Switch>
  </HashRouter>
);

export default hot(module)(App);
