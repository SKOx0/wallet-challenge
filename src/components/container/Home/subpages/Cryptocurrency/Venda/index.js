import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import Venda from './Venda';
import { convertCryptocurrencyToBrl } from '../../../actions';

const mapDispatchToProps = (dispatch) => ({
  convertCryptocurrencyToBrl: (currency) => {
    if (currency !== undefined) { dispatch(convertCryptocurrencyToBrl(currency)); }
  },
  dispatch
});

const selector = formValueSelector('Venda');
const mapStateToProps = createStructuredSelector({
  brlValue: (state) => selector(state, 'valorreais'),
  cryptoCurrencyValue: (state) => selector(state, 'valor')
});

export default connect(mapStateToProps, mapDispatchToProps)(Venda);
export { mapDispatchToProps };
