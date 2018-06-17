import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SelectValidation from '../Select';

describe('<SelectValidation />', () => {
  it('deve ser igual ao snapshot', () => {
    const renderedComponent = shallow(<SelectValidation />);

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
