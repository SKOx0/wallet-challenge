import React from 'react';
import { shallow } from 'enzyme';
import PrivateRoute from 'components/common/PrivateRoute';

import App from '../index';

describe('<App />', () => {
  it('Deve renderizar o container App com rota privadas', () => {
    const appComponent = shallow(<App />);

    const appDiv = appComponent.find(PrivateRoute);
    expect(appDiv.length).not.toBe(0);
  });
});
