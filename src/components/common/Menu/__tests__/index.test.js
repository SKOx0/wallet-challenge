import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Menu from '../index';

describe('<Menu />', () => {
  it('deve ser igual ao snapshot', () => {
    const renderedComponent = shallow(<Menu />);

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
