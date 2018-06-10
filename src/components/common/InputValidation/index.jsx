import React from 'react';
import { Field } from 'redux-form';
import { Help } from 'bloomer';
import PropTypes from 'prop-types';
import Input from '../Input';

const validationField = ({
  input, label, type, meta: { touched, error }
}) => (
  <div>
    <Input {...input} type={type} placeholder={label} />
    {touched && error && <Help isColor="danger">{error}</Help>}
  </div>
);

const InputValidation = (props) => (<Field component={validationField} {...props} />);

export default InputValidation;

validationField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};
