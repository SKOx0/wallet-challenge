import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CurrencyValidation from '../Currency';

describe('<CurrencyValidation />', () => {
  it('deve ser igual ao snapshot', () => {
    const renderedComponent = shallow(<CurrencyValidation />);

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
