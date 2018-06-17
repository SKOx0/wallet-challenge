import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import IntlCurrencyInput from 'react-intl-currency-input';
import CurrencyInput, { CurrencyComponent } from '../Currency';

describe('<CurrencyInput />', () => {
  it('deve ser igual ao snapshot, com configurações padrões', () => {
    const renderedComponent = shallow(<CurrencyInput currency="BRL" config={{}} />);

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('deve passar informações do input de currency', () => {
    const config = {
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
    };

    const renderedComponent = shallow(<CurrencyComponent
      currency="BRL"
      config={config}
    />);

    expect(renderedComponent.find('IntlCurrencyInput').prop('currency')).toEqual('BRL');
    expect(renderedComponent.find('IntlCurrencyInput').prop('config')).toEqual(config);
  });
});
