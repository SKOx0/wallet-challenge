import React from 'react';
import { Field } from 'redux-form';
import { Help } from 'bloomer';
import PropTypes from 'prop-types';
import BrlCurrencyInput from '../Input/BrlCurrency';

const validationField = ({
  input, label, type, meta: { touched, error }, readOnly, onChangeCurrency
}) => (
  <div>
    <BrlCurrencyInput {...input} type={type} placeholder={label} readOnly={readOnly} onChange={onChangeCurrency} />
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
  onChangeCurrency: PropTypes.func
};
