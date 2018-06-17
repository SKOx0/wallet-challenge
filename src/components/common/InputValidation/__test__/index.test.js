import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import InputValidation from '../index';

describe('<InputValidation />', () => {
  it('deve ser igual ao snapshot', () => {
    const renderedComponent = shallow(<InputValidation />);

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
