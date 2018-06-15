import React from 'react';
import { Field } from 'redux-form';
// import { Help } from 'bloomer';
// import PropTypes from 'prop-types';
import Input from '../Input';

// const validationField = ({
//   input, meta: { touched, error }, readOnly, children
// }) => (
//   <div>
//     <select {...input} readOnly={readOnly} >
//       {children}
//     </select>
//     {touched && error && <Help isColor="danger">{error}</Help>}
//   </div>
// );

const SelectValidation = (props) => (<Field component="select" {...props} />);

export default Input.withComponent(SelectValidation);
