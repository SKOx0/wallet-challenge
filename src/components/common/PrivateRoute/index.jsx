import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const token = localStorage.getItem('authToken');

      if (token && props.location.pathname === '/auth') {
        return <Redirect to={{ pathname: '/' }} />;
      } else if (!token && props.location.pathname !== '/auth') {
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
  location: PropTypes.object,
  token: PropTypes.string
};
