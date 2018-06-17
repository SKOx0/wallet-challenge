import configureStore from '../store.config';

describe('Configure Store module', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, {});
  });

  it('Deve ser igual ao snapshot', () => {
    expect(store).toMatchSnapshot();
  });
});
