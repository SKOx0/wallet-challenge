import React from 'react';
import IntlCurrencyInput from 'react-intl-currency-input';
import PropTypes from 'prop-types';
import Input from '../Input';

const CurrencyComponent = (props) => (
  <IntlCurrencyInput
    currency={props.currency}
    config={props.config}
    {...props}
  />);

export { CurrencyComponent };

export default Input.withComponent(CurrencyComponent);

CurrencyComponent.propTypes = {
  onChange: PropTypes.func,
  currency: PropTypes.string,
  config: PropTypes.object
};
