import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import Comprar from './Comprar';
import { convertCurrencyValue } from '../../../actions';
import { makeSelectConvertedValue, makeSelectCurrencies } from '../../../selectors';

const mapDispatchToProps = (dispatch) => ({
  convertCurrencyValue: (currency) => {
    if (currency !== undefined) { dispatch(convertCurrencyValue(currency)); }
  },
  dispatch
});

const selector = formValueSelector('Comprar');
const mapStateToProps = createStructuredSelector({
  convertedValue: makeSelectConvertedValue(),
  currencies: makeSelectCurrencies(),
  brlValue: (state) => selector(state, 'valor'),
  cryptoCurrencyValue: (state) => selector(state, 'quantidademoeda')
});

export default connect(mapStateToProps, mapDispatchToProps)(Comprar);
export { mapDispatchToProps };
