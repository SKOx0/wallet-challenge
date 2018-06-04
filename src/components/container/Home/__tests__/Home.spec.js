import React from 'react';
import { shallow } from 'enzyme';

import Home from '../';

describe('<Home />', () => {
  it('should render Home container', () => {
    const appComponent = shallow(<Home />);

    const homeDiv = appComponent.find('div').text();
    expect(homeDiv).toBe('Hello, my name is home!');
  });
});
