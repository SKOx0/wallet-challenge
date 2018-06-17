import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeSelectAccountCreated, makeSelectIsAuthenticated } from './selectors';
import Auth from './Auth';
import { authenticate, newAccount, newAccountSuccess } from './actions';

const mapDispatchToProps = (dispatch) => ({
  onCreateAccountSubmit: (form) => {
    if (form !== undefined) { dispatch(newAccount(form)); }
  },
  onLoginSubmit: (form) => {
    if (form !== undefined) { dispatch(authenticate(form)); }
  },
  resetNewAccountForm: (created) => {
    dispatch(newAccountSuccess(created));
  }
});

const mapStateToProps = createStructuredSelector({
  accountCreated: makeSelectAccountCreated(),
  isAuthenticated: makeSelectIsAuthenticated()
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));
export { mapDispatchToProps };
