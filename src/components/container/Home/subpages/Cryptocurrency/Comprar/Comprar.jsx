import React from 'react';
import { reduxForm } from 'redux-form';
import { Content, Field, Control, Label, Button } from 'bloomer';
import InputValidation from 'components/common/InputValidation';
import BrlCurrencyInputValidation from 'components/common/InputValidation/BrlCurrency';
import Form from 'components/common/Form';
import { func, string, object, number } from 'prop-types';
import { listAvailibleCurrencies, exchargeCryptocurrency } from '../../../actions';

const formName = 'Comprar';

class Comprar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.exchange = this.exchange.bind(this);
  }

  componentDidMount() {
    const { dispatch, moeda } = this.props;

    dispatch(listAvailibleCurrencies(moeda));
  }

  componentDidUpdate(prevProps) {
    const { moeda, convertCurrencyValue, currencies } = this.props;

    if (prevProps.moeda !== this.props.moeda) {
      this.props.reset();

      if (currencies) { convertCurrencyValue({ valor: currencies.valor, moeda, form: { name: formName, targetField: 'quantidademoeda' } }); }
    }
  }

  handleChange(event, value) {
    event.preventDefault();

    const { convertCurrencyValue, moeda } = this.props;

    convertCurrencyValue({ valor: value, moeda, form: { name: formName, targetField: 'quantidademoeda' } });
  }

  exchange(event) {
    event.preventDefault();

    const {
      dispatch, brlValue, cryptoCurrencyValue, moeda
    } = this.props;

    dispatch(exchargeCryptocurrency({
      exchangeCurrencyValue: brlValue, cryptoCurrencyValue, moeda, moedaTroca: 'real'
    }));

    this.render();
  }

  render() {
    const { moeda } = this.props;
    return (
      <Content>
        <Form width="100%" padding="30px">
          <Field>
            <Label>Valor em reais</Label>
            <Control>
              <BrlCurrencyInputValidation name="valor" label="0" onChangeCurrency={this.handleChange} />
            </Control>
          </Field>

          <Field>
            <Label>Quantidade de {moeda}</Label>
            <Control>
              <InputValidation name="quantidademoeda" type="text" label="0" readOnly />
            </Control>
          </Field>

          <Button onClick={this.exchange} isFullWidth className="is-stone">Comprar</Button>
        </Form>
      </Content>
    );
  }
}

export default reduxForm({
  form: formName,
})(Comprar);

Comprar.propTypes = {
  moeda: string.isRequired,
  convertCurrencyValue: func,
  dispatch: func,
  reset: func,
  currencies: object,
  brlValue: string,
  cryptoCurrencyValue: number
};
