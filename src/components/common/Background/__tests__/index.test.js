import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Background from '../index';

describe('<Background />', () => {
  it('deve ser igual ao snapshot', () => {
    const renderedComponent = shallow(<Background color="#000000" />);

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
