import React from 'react';
import { reduxForm } from 'redux-form';
import { Content, Field, Control, Label, Button } from 'bloomer';
import CurrencyInputValidation from 'components/common/InputValidation/Currency';
import InputValidation from 'components/common/InputValidation';
import SelectValidation from 'components/common/InputValidation/Select';
import Form from 'components/common/Form';
import { func, string, number, array } from 'prop-types';
import { exchargeCryptocurrency } from '../../../actions';
import { REAL } from '../../../constants';

const formName = 'Troca';

class Troca extends React.Component {
  constructor(props) {
    super(props);

    this.handleCryptocurrencyChange = this.handleCryptocurrencyChange.bind(this);
    this.exchange = this.exchange.bind(this);
  }

  handleCryptocurrencyChange(event, value) {
    event.preventDefault();

    const { convertCryptocurrencyToCryptocurrency, moeda } = this.props;

    convertCryptocurrencyToCryptocurrency({ valor: value, moeda, form: { name: formName, targetField: 'valormoedadestino' } });
  }

  exchange(event) {
    event.preventDefault();

    const {
      dispatch, brlValue, cryptoCurrencyValue, moeda
    } = this.props;

    dispatch(exchargeCryptocurrency({
      exchangeCurrencyValue: cryptoCurrencyValue, cryptoCurrencyValue: brlValue, moeda: REAL, moedaTroca: moeda, tipoTransacao: 'troca'
    }));
  }

  render() {
    const { moeda, currencyList } = this.props;
    return (
      <Content>
        <Form width="100%" padding="30px">
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
            <Label>Moeda destino</Label>
            <Control>
              <SelectValidation name="moedadestino">
                {currencyList.map((key) => (<option key={`${key}`}>{key}</option>))}
              </SelectValidation>
            </Control>
          </Field>


          <Field>
            <Label>Valor convertido</Label>
            <Control>
              <InputValidation
                name="valormoedadestino"
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
  brlValue: number,
  cryptoCurrencyValue: number,
  dispatch: func,
  currencyList: array
};
