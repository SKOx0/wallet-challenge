import React from 'react';
import { reduxForm } from 'redux-form';
import { Content, Field, Control, Label, Button } from 'bloomer';
import Input from 'components/common/Input';
import BrlCurrencyInputValidation from 'components/common/InputValidation/BrlCurrency';
import Form from 'components/common/Form';
import PropTypes from 'prop-types';


class Comprar extends React.PureComponent {
  constructor(props) {
    super(props);


    this.state = {
      brlValue: 0,
      convertedValue: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      convertedValue: nextProps.convertedValue ? nextProps.convertedValue : 0
    };
  }

  handleChange(event, value) {
    event.preventDefault();

    const { convertCurrencyValue, moeda } = this.props;

    this.setState({ brlValue: value });

    convertCurrencyValue({ valor: value, moeda });
  }

  render() {
    const { moeda } = this.props;
    return (
      <Content>
        <Form width="100%" padding="30px">
          <Field>
            <Label>Valor em reais</Label>
            <Control>
              <BrlCurrencyInputValidation name="valor" label="0" value={this.state.brlValue} onChangeCurrency={this.handleChange} />
            </Control>
          </Field>

          <Field>
            <Label>Quantidade de {moeda}</Label>
            <Control>
              <Input name="quantidademoeda" type="text" placeholder="0" readOnly value={this.state.convertedValue} />
            </Control>
          </Field>

          <Button isFullWidth className="is-stone">Comprar</Button>
        </Form>
      </Content>
    );
  }
}

export default reduxForm({
  form: 'Comprar'
})(Comprar);

Comprar.propTypes = {
  moeda: PropTypes.string.isRequired,
  convertCurrencyValue: PropTypes.func
};
