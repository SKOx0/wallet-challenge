import reducer from '../reducer';
import { authenticate, authenticateError, authenticateSuccess } from '../actions';

describe('Auth Reducer', () => {
  let state;
  beforeEach(() => {
    state = { };
  });

  it('Deve tratar a action authenticate de forma correta', () => {
    const user = { email: 'teste@gm.com', senha: '123' };
    const expectedResult = { ...state, user };

    expect(reducer(state, authenticate(user))).toEqual(expectedResult);
  });

  it('Deve tratar a action authenticateError de forma correta', () => {
    const error = 'Login failed';
    const expectedResult = { ...state, error };

    expect(reducer(state, authenticateError(error))).toEqual(expectedResult);
  });

  it('Deve tratar a action authenticateSuccess de forma correta', () => {
    const isAuthenticated = true;
    const expectedResult = { ...state, isAuthenticated };

    expect(reducer(state, authenticateSuccess(isAuthenticated))).toEqual(expectedResult);
  });

  it('Deve retornar o state inicial', () => {
    const expectedResult = state;
    expect(reducer(undefined, {})).toEqual(expectedResult);
  });
});
