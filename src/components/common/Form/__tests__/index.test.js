import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Form from '../index';

describe('<Form />', () => {
  it('deve ser igual ao snapshot, com altura, largura, bg e espaçamentos', () => {
    const renderedComponent = shallow(<Form height="500px" width="100px#" bgColor="#ffffff" paddding="20px" />);

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
