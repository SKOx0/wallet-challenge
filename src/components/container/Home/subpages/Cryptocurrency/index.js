import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { formValueSelector } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import Cryptocurrency from './Cryptocurrency';
import { makeSelectCurrencyList } from '../../selectors';

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

const mapStateToProps = createStructuredSelector({
  currencyList: makeSelectCurrencyList()
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cryptocurrency));
export { mapDispatchToProps };
