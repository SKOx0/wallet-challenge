import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectAccountCreated } from './selectors';
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
  accountCreated: makeSelectAccountCreated()
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
export { mapDispatchToProps };
