import React from 'react';
import { reduxForm } from 'redux-form';
import { Content, Field, Control, Label, Notification, Delete, Button } from 'bloomer';
import InputValidation from 'components/common/InputValidation';
import BrlCurrencyInputValidation from 'components/common/InputValidation/BrlCurrency';
import Form from 'components/common/Form';
import PropTypes from 'prop-types';

const Venda = ({ moeda }) => (
  <Content>
    <Notification>
      <Delete />
      Atenção! Toda operação tem uma comissão de 1% do valor da venda em reais
    </Notification>
    <Form width="100%" padding="30px">
      <Field>
        <Label>Quantidade de {moeda}</Label>
        <Control>
          <InputValidation name="valor" type="text" label="0" />
        </Control>
      </Field>

      <Field>
        <Label>Valor convertido em reais</Label>
        <Control>
          <BrlCurrencyInputValidation name="valorreais" type="text" label="0" readOnly />
        </Control>
      </Field>

      <Field>
        <Label>Valor final</Label>
        <Control>
          <BrlCurrencyInputValidation name="valorfinal" type="text" label="0" readOnly />
        </Control>
      </Field>

      <Button isFullWidth className="is-stone">Vender</Button>
    </Form>
  </Content>
);

export default reduxForm({
  form: 'Venda'
})(Venda);

Venda.propTypes = {
  moeda: PropTypes.string.isRequired
};
