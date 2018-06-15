import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Home from './Home';
import { makeSelectBalance } from './selectors';
import { getBalance } from './actions';

const mapDispatchToProps = (dispatch) => ({
  getInitialBalance: () => { dispatch(getBalance()); }
});

const mapStateToProps = createStructuredSelector({
  balance: makeSelectBalance()
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
export { mapDispatchToProps };
