import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Home from './Home';
import { makeSelectBalance, makeSelectTransactions } from './selectors';
import { getBalance, listTransactions } from './actions';

const mapDispatchToProps = (dispatch) => ({
  getInitialBalance: () => { dispatch(getBalance()); },
  listTransactions: () => { dispatch(listTransactions()); }
});

const mapStateToProps = createStructuredSelector({
  balance: makeSelectBalance(),
  transactions: makeSelectTransactions()
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
export { mapDispatchToProps };
