import React from 'react';
import { reduxForm } from 'redux-form';
import { Content, Field, Control, Label, Button } from 'bloomer';
import CurrencyInputValidation from 'components/common/InputValidation/Currency';
import InputValidation from 'components/common/InputValidation';
import SelectValidation from 'components/common/InputValidation/Select';
import Form from 'components/common/Form';
import { func, string, number, array, oneOf } from 'prop-types';
import { exchargeCryptocurrency } from '../../../actions';

const formName = 'Troca';

class Troca extends React.Component {
  constructor(props) {
    super(props);

    this.handleCryptocurrencyChange = this.handleCryptocurrencyChange.bind(this);
    this.exchange = this.exchange.bind(this);
  }

  handleCryptocurrencyChange(event, value) {
    event.preventDefault();

    const { convertCryptocurrencyToCryptocurrency, moeda, moedaTroca } = this.props;

    convertCryptocurrencyToCryptocurrency({
      valor: value, moeda, moedaTroca, form: { name: formName, targetField: 'valormoedatroca' }
    });
  }

  exchange(event) {
    event.preventDefault();

    const {
      dispatch, valorMoedaTroca, valor, moeda, moedaTroca
    } = this.props;

    dispatch(exchargeCryptocurrency({
      exchangeCurrencyValue: valor, cryptoCurrencyValue: valorMoedaTroca, moeda: moedaTroca, moedaTroca: moeda, tipoTransacao: 'troca'
    }));
  }

  render() {
    const { moeda, currencyList } = this.props;
    return (
      <Content>
        <Form width="100%" padding="30px">

          <Field>
            <Label>Moeda de Troca</Label>
            <Control>
              <SelectValidation name="moedatroca">
                <option></option>
                {currencyList.map((key) => (<option key={`${key}`}>{key}</option>))}
              </SelectValidation>
            </Control>
          </Field>

          <Field>
            <Label>Quantidade de {moeda}</Label>
            <Control>
              <CurrencyInputValidation
                name="valor"
                type="text"
                label="0"
                onChangeCurrency={this.handleCryptocurrencyChange}
                currency="USD"
              />
            </Control>
          </Field>

          <Field>
            <Label>Valor convertido</Label>
            <Control>
              <InputValidation
                name="valormoedatroca"
                type="text"
                label="0"
                readOnly
              />
            </Control>
          </Field>

          <Button onClick={this.exchange} isFullWidth className="is-stone">Trocar</Button>
        </Form>
      </Content>
    );
  }
}

export default reduxForm({
  form: formName
})(Troca);

Troca.propTypes = {
  moeda: string.isRequired,
  convertCryptocurrencyToCryptocurrency: func,
  valorMoedaTroca: oneOf([string, number]),
  valor: oneOf([string, number]),
  dispatch: func,
  currencyList: array,
  moedaTroca: string
};
