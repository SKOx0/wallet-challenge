import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Title from '../index';

describe('<Title />', () => {
  it('deve ser igual ao snapshot', () => {
    const renderedComponent = shallow(<Title color="#ffffff" />);

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
