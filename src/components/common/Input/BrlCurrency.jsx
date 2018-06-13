import React from 'react';
import IntlCurrencyInput from 'react-intl-currency-input';
import PropTypes from 'prop-types';
import Input from '../Input';

const currencyConfig = {
  locale: 'pt-BR',
  formats: {
    number: {
      BRL: {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

const BrlCurrencyComponent = (props) => (
  <IntlCurrencyInput
    currency="BRL"
    config={currencyConfig}
    {...props}
  />);

export default Input.withComponent(BrlCurrencyComponent);

BrlCurrencyComponent.propTypes = {
  onChange: PropTypes.func
};
