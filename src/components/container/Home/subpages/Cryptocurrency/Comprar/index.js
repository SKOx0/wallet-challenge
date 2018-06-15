import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import Comprar from './Comprar';
import { convertBrlToCryptocurrency } from '../../../actions';
import { makeSelectConvertedValue, makeSelectConvertBrlInformations } from '../../../selectors';

const mapDispatchToProps = (dispatch) => ({
  convertBrlToCryptocurrency: (currency) => {
    if (currency !== undefined) { dispatch(convertBrlToCryptocurrency(currency)); }
  },
  dispatch
});

const selector = formValueSelector('Comprar');
const mapStateToProps = createStructuredSelector({
  convertedValue: makeSelectConvertedValue(),
  convertBrlInformations: makeSelectConvertBrlInformations(),
  brlValue: (state) => selector(state, 'valor'),
  cryptoCurrencyValue: (state) => selector(state, 'quantidademoeda')
});

export default connect(mapStateToProps, mapDispatchToProps)(Comprar);
export { mapDispatchToProps };
