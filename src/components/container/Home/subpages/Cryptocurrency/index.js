import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Cryptocurrency from './Cryptocurrency';
import { makeSelectCurrencyList, makeSelectTransactions } from '../../selectors';

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

const mapStateToProps = createStructuredSelector({
  currencyList: makeSelectCurrencyList(),
  transactions: makeSelectTransactions()
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cryptocurrency));
export { mapDispatchToProps };
