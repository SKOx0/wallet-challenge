import React from 'react';
import { reduxForm } from 'redux-form';
import { Content, Field, Control, Label, Button } from 'bloomer';
import InputValidation from 'components/common/InputValidation';
import CurrencyInputValidation from 'components/common/InputValidation/Currency';
import Form from 'components/common/Form';
import { func, string, object, number } from 'prop-types';
import { exchargeCryptocurrency } from '../../../actions';
import { REAL } from '../../../constants';

const formName = 'Comprar';

class Comprar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.exchange = this.exchange.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { moeda, convertBrlToCryptocurrency, convertBrlInformations } = this.props;

    if (prevProps.moeda !== this.props.moeda) {
      this.props.reset();

      if (convertBrlInformations) { convertBrlToCryptocurrency({ valor: convertBrlInformations.valor, moeda, form: { name: formName, targetField: 'quantidademoeda' } }); }
    }
  }

  handleChange(event, value) {
    event.preventDefault();

    const { convertBrlToCryptocurrency, moeda } = this.props;

    convertBrlToCryptocurrency({ valor: value, moeda, form: { name: formName, targetField: 'quantidademoeda' } });
  }

  exchange(event) {
    event.preventDefault();

    const {
      dispatch, brlValue, cryptoCurrencyValue, moeda
    } = this.props;

    dispatch(exchargeCryptocurrency({
      exchangeCurrencyValue: brlValue, cryptoCurrencyValue, moeda, moedaTroca: REAL, tipoTransacao: 'compra'
    }));
  }

  render() {
    const { moeda } = this.props;
    return (
      <Content>
        <Form width="100%" padding="30px">
          <Field>
            <Label>Valor em reais</Label>
            <Control>
              <CurrencyInputValidation
                name="valor"
                label="0"
                onChangeCurrency={this.handleChange}
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
  convertBrlToCryptocurrency: func,
  dispatch: func,
  reset: func,
  convertBrlInformations: object,
  brlValue: string,
  cryptoCurrencyValue: number
};
