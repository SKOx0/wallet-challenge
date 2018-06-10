import { AUTHENTICATE, AUTHENTICATE_FAILURE, AUTHENTICATE_SUCCESS } from '../constants';

import { authenticate, authenticateError, authenticateSuccess } from '../actions';

describe('Auth actions', () => {
  describe('authenticate action', () => {
    it('Deve retornar as informações do usuário', () => {
      const user = {
        email: 'pp@g.com',
        senha: '123'
      };
      const expected = {
        type: AUTHENTICATE,
        user
      };

      expect(authenticate(user)).toEqual(expected);
    });

    it('Deve retornar as informações de error quanto a autenticação falhar', () => {
      const error = 'Falha ao autenticar!';
      const expected = {
        type: AUTHENTICATE_FAILURE,
        error
      };
      expect(authenticateError(error)).toEqual(expected);
    });

    it('Deve retornar o estado atual da autenticação', () => {
      const isAuthenticated = true;

      const expected = {
        type: AUTHENTICATE_SUCCESS,
        isAuthenticated
      };
      expect(authenticateSuccess(isAuthenticated)).toEqual(expected);
    });
  });
});
