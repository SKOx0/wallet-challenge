import React from 'react';
import { reduxForm } from 'redux-form';
import { Content, Field, Control, Label, Notification, Delete, Button } from 'bloomer';
import CurrencyInputValidation from 'components/common/InputValidation/Currency';
import InputValidation from 'components/common/InputValidation';
import Form from 'components/common/Form';
import { func, string, number } from 'prop-types';
import { exchargeCryptocurrency } from '../../../actions';
import { REAL } from '../../../constants';

const formName = 'Venda';

class Venda extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideComission: false
    };

    this.handleCryptocurrencyChange = this.handleCryptocurrencyChange.bind(this);
    this.exchange = this.exchange.bind(this);
  }

  handleCryptocurrencyChange(event, value) {
    event.preventDefault();

    const { convertCryptocurrencyToBrl, moeda } = this.props;

    convertCryptocurrencyToBrl({ valor: value, moeda, form: { name: formName, targetField: 'valorreais' } });
  }

  exchange(event) {
    event.preventDefault();

    const {
      dispatch, brlValue, cryptoCurrencyValue, moeda
    } = this.props;

    dispatch(exchargeCryptocurrency({
      exchangeCurrencyValue: cryptoCurrencyValue, cryptoCurrencyValue: brlValue, moeda: REAL, moedaTroca: moeda, tipoTransacao: 'venda'
    }));
  }

  render() {
    const { moeda } = this.props;
    return (
      <Content>
        <Notification isHidden={this.state.hideComission}>
          <Delete onClick={() => this.setState({ hideComission: true })} />
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
                onChangeCurrency={this.handleCryptocurrencyChange}
                currency="USD"
              />
            </Control>
          </Field>

          <Field>
            <Label>Valor convertido em reais</Label>
            <Control>
              <InputValidation
                name="valorreais"
                type="text"
                label="0"
                readOnly
              />
            </Control>
          </Field>

          <Button onClick={this.exchange} isFullWidth className="is-stone">Vender</Button>
        </Form>
      </Content>
    );
  }
}

export default reduxForm({
  form: formName
})(Venda);

Venda.propTypes = {
  moeda: string.isRequired,
  convertCryptocurrencyToBrl: func,
  brlValue: number,
  cryptoCurrencyValue: number,
  dispatch: func
};
