import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  it('should render app container', () => {
    const appComponent = shallow(<App />);

    var appDiv = appComponent.find('div').text();
    expect(appDiv).toBe('Container app');
  });
});
