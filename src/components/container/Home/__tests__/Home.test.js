import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('<Home />', () => {
  it('should render Home container', () => {
    const homeComponent = shallow(<Home />);


    expect(homeComponent).toBeDefined();
  });
});
