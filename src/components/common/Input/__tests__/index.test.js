import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Input from '../index';

describe('<Input />', () => {
  it('deve ser igual ao snapshot, com configurações padrões', () => {
    const renderedComponent = shallow(<Input />);

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
