import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import App from '../index';

describe('<App />', () => {
  it('Deve renderizar o container App com rota', () => {
    const appComponent = shallow(<App />);

    const appDiv = appComponent.find(Route);
    expect(appDiv.length).not.toBe(0);
  });
});
