import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Home from './Home';
import { makeSelectBalance, makeSelectTransactions } from './selectors';
import { getBalance, listTransactions } from './actions';
import { logout } from '../Auth/actions';

const mapDispatchToProps = (dispatch) => ({
  getInitialBalance: () => { dispatch(getBalance()); },
  listTransactions: () => { dispatch(listTransactions()); },
  onLogout: () => { dispatch(logout()); }
});

const mapStateToProps = createStructuredSelector({
  balance: makeSelectBalance(),
  transactions: makeSelectTransactions()
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
export { mapDispatchToProps };
