import React from 'react';
import { Field } from 'redux-form';
import { Help } from 'bloomer';
import PropTypes from 'prop-types';
import CurrencyInput from '../Input/Currency';

const validationField = ({
  input, label, type, meta: { touched, error }, readOnly, onChangeCurrency, currencyConfig, currency
}) => (
  <div>
    <CurrencyInput {...input} type={type} placeholder={label} readOnly={readOnly} onChange={onChangeCurrency} config={currencyConfig} currency={currency} />
    {touched && error && <Help isColor="danger">{error}</Help>}
  </div>
);

const BrlCurrency = ({ ...rest }) => (<Field component={validationField} {...rest} />);

export default BrlCurrency;

validationField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  readOnly: PropTypes.bool,
  onChangeCurrency: PropTypes.func,
  currencyConfig: PropTypes.object,
  currency: PropTypes.string
};
