import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../index';

describe('<Header />', () => {
  it('deve ser igual ao snapshot, com configurações padrões', () => {
    const renderedComponent = shallow(<Header onLogout={() => {}} />);

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
