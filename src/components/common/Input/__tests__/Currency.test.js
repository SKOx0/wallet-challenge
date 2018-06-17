import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import IntlCurrencyInput from 'react-intl-currency-input';
import CurrencyInput from '../Currency';

describe('<CurrencyInput />', () => {
  it('deve ser igual ao snapshot, com configurações padrões', () => {
    const renderedComponent = shallow(<CurrencyInput />);

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('deve passar informações do input de currency', () => {
    const renderedComponent = shallow(<CurrencyInput />);

    expect(renderedComponent.find(IntlCurrencyInput)).toBeDefined();
  });
});
