import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Comprar from './Comprar';
import { convertCurrencyValue } from '../../../actions';
import { makeSelectConvertedValue } from '../../../selectors';

const mapDispatchToProps = (dispatch) => ({
  convertCurrencyValue: (currency) => {
    if (currency !== undefined) { dispatch(convertCurrencyValue(currency)); }
  }
});

const mapStateToProps = createStructuredSelector({
  convertedValue: makeSelectConvertedValue()
});

export default connect(mapStateToProps, mapDispatchToProps)(Comprar);
export { mapDispatchToProps };
