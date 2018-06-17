import React from 'react';
import { Field } from 'redux-form';
import Input from '../Input';

const SelectValidation = (props) => (<Field component="select" {...props} />);

export default Input.withComponent(SelectValidation);
