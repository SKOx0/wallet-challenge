import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import localForage from 'localforage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const authToken = localForage.getItem('authToken');

      if (authToken && props.location.pathname === '/auth') {
        return <Redirect to={{ pathname: '/' }} />;
      } else if (!authToken && props.location.pathname !== '/auth') {
        return (
          <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
        );
      }

      return <Component {...props} />;
    }
    }
  />
);

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object
};
