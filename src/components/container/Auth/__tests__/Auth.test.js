import React from 'react';
import { shallow } from 'enzyme';
import Auth from '../index';

describe('<Auth />', () => {
  it('Deve renderizar o container Auth', () => {
    const authComponent = shallow(<Auth />);

    const authDiv = authComponent;
    expect(authDiv).not.toBe(null);
  });
});
