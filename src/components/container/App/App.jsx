import React from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from 'components/common/PrivateRoute';
import ListeningRouter from 'components/common/ListeningRouter';
import Auth from '../Auth';
import Home from '../Home';


const App = () =>
  (
    <ListeningRouter>
      <Switch>
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </ListeningRouter>
  );


export default hot(module)(App);
