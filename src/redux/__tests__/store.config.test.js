import { browserHistory } from 'react-router-dom';
import configureStore from '../store.config';

describe('Configure Store module', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should match snapshot', () => {
    expect(store).toMatchSnapshot();
  });
});
