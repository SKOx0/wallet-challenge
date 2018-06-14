import React from 'react';
import { Field } from 'redux-form';
import { Help } from 'bloomer';
import PropTypes from 'prop-types';
import Input from '../Input';

const validationField = ({
  input, meta: { touched, error }, readOnly
}) => (
  <div>
    <select {...input} readOnly={readOnly} />
    {touched && error && <Help isColor="danger">{error}</Help>}
  </div>
);

const InputValidation = (props) => (<Field component={validationField} {...props} />);

export default Input.withComponent(InputValidation);

validationField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  readOnly: PropTypes.bool
};
