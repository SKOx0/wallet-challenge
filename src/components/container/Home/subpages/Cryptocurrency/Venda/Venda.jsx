import React from 'react';
import { reduxForm } from 'redux-form';
import { Content, Field, Control, Label, Notification, Delete, Button } from 'bloomer';
import InputValidation from 'components/common/InputValidation';
import CurrencyInputValidation from 'components/common/InputValidation/Currency';
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
          <CurrencyInputValidation
            name="valor"
            type="text"
            label="0"
            currency="USD"
          />
        </Control>
      </Field>

      <Field>
        <Label>Valor convertido em reais</Label>
        <Control>
          <CurrencyInputValidation
            name="valorreais"
            type="text"
            label="0"
            readOnly
            currency="BRL"
            currencyConfig={{
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
              }
            }}
          />
        </Control>
      </Field>

      <Field>
        <Label>Valor final</Label>
        <Control>
          <CurrencyInputValidation
            name="valorfinal"
            type="text"
            label="0"
            readOnly
            currency="BRL"
            currencyConfig={{
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
              }
            }}
          />
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
