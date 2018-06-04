import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import App from '..';

describe('<App />', () => {
  it('should render app with route', () => {
    const appComponent = shallow(<App />);

    const appDiv = appComponent.find(Route);
    expect(appDiv.length).not.toBe(0);
  });
});
