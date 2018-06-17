import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class PrivateRoute extends React.PureComponent {
  componentWillMount() {
    this.user = localStorage.getItem('authToken');
  }

  user = null;

  render() {
    const {
      component: Component, render, ...rest
    } = this.props;

    if (render && this.user) {
      return (<Route {...rest} render={render} />);
    }

    if (!this.user && rest.location.pathname !== '/auth') {
      return (<Redirect to="/auth" />);
    }

    return (
      <Route
        {...rest}
        render={(props) => (this.user
          ? <Component {...props} />
          : <Redirect to="/auth" />)}
      />
    );
  }
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.func,
  render: PropTypes.func,
  location: PropTypes.object,
  token: PropTypes.string
};
