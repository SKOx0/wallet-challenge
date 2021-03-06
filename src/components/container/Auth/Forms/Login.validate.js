const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Informe o e-mail!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Endereço de e-mail inválido!';
  }
  if (!values.senha) {
    errors.senha = 'Informe a senha';
  }
  return errors;
};

export default validate;
