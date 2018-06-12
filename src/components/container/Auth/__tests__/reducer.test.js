import reducer from '../reducer';
import { authenticate, authenticateSuccess, newAccount, newAccountSuccess } from '../actions';

describe('Auth Reducer', () => {
  let state;
  beforeEach(() => {
    state = { };
  });

  it('Deve retornar o state inicial', () => {
    const expectedResult = state;
    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  it('Deve tratar a action authenticate de forma correta', () => {
    const user = { email: 'teste@gm.com', senha: '123' };
    const expectedResult = { ...state, user };

    expect(reducer(state, authenticate(user))).toEqual(expectedResult);
  });

  it('Deve tratar a action authenticateSuccess de forma correta', () => {
    const isAuthenticated = true;
    const expectedResult = { ...state, isAuthenticated };

    expect(reducer(state, authenticateSuccess(isAuthenticated))).toEqual(expectedResult);
  });

  it('Deve tratar a action newAccount de forma correta', () => {
    const account = {
      email: 'skob@mail2.com  '
    };
    const expectedResult = { ...state, account };

    expect(reducer(state, newAccount(account))).toEqual(expectedResult);
  });

  it('Deve tratar a action newAccountSuccess de forma correta', () => {
    const accountCreated = true;
    const expectedResult = { ...state, accountCreated };

    expect(reducer(state, newAccountSuccess(accountCreated))).toEqual(expectedResult);
  });
});
