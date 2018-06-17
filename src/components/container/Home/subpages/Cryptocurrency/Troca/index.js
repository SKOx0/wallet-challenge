import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
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

const selector = formValueSelector('Troca');
const mapStateToProps = createStructuredSelector({
  currencyList: makeSelectCurrencyList(),
  moedaTroca: (state) => selector(state, 'moedatroca'),
  valorMoedaTroca: (state) => selector(state, 'valormoedatroca'),
  valor: (state) => selector(state, 'valor'),
});

export default connect(mapStateToProps, mapDispatchToProps)(Troca);
export { mapDispatchToProps };
