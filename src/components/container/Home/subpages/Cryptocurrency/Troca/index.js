import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Troca from './Troca';
import { makeSelectCurrencyList } from '../../../selectors';
import { convertCryptocurrencyToCryptocurrency } from '../../../actions';

const mapDispatchToProps = (dispatch) => ({
  convertCryptocurrencyToCryptocurrency: (currency) => {
    if (currency !== undefined) { dispatch(convertCryptocurrencyToCryptocurrency(currency)); }
  },
  dispatch
});

const mapStateToProps = createStructuredSelector({
  currencyList: makeSelectCurrencyList()
});

export default connect(mapStateToProps, mapDispatchToProps)(Troca);
export { mapDispatchToProps };
