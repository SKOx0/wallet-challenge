import React from 'react';
import { shallow } from 'enzyme';
import Auth from '../Auth';

describe('<Auth />', () => {
  it('should render Auth container', () => {
    const authComponent = shallow(<Auth />);

    const authDiv = authComponent.find('div').text();
    expect(authDiv).toBe('Hello, my name is auth!');
  });
});
