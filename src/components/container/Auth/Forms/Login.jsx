import React from 'react';
import { Field, Control, Button } from 'bloomer';
import { reduxForm } from 'redux-form';
import Form from 'components/common/Form';
import InputValidation from 'components/common/InputValidation';
import PropTypes from 'prop-types';
import colors from 'styles/theme';
import Title from 'components/common/Title';
import validate from './Login.validate';

const Login = (props) => {
  const {
    handleSubmit, submitting, onSubmitForm, changeForm
  } = props;

  return (
    <Form bgColor={colors.background.inverse} className="p-30" onSubmit={handleSubmit(onSubmitForm)} method="POST">
      <Title color="black" className="has-text-centered is-size-5">Acesse sua carteira!</Title>

      <Field className="mt-30">
        <Control>
          <InputValidation name="email" type="text" label="E-mail" />
        </Control>
      </Field>

      <Field>
        <Control>
          <InputValidation name="senha" type="password" label="Senha" />
        </Control>
      </Field>
      <Field>
        <label className="checkbox" htmlFor="changeForm">
          Ainda não tem uma carteira? <a onClick={changeForm}>Crie uma!</a>
        </label>
      </Field>

      <Button disabled={submitting} isFullWidth isSize="large" type="submit" className="mt-50 is-stone">Entrar</Button>
    </Form>
  );
};

export default reduxForm({
  form: 'Login',
  validate
})(Login);

Login.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  onSubmitForm: PropTypes.func,
  changeForm: PropTypes.func
};
