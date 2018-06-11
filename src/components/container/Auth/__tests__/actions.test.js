import { AUTHENTICATE, AUTHENTICATE_FAILURE, AUTHENTICATE_SUCCESS, NEW_ACCOUNT, NEW_ACCOUNT_SUCCESS } from '../constants';

import { authenticate, authenticateError, authenticateSuccess } from '../actions';

describe('Auth actions', () => {
  describe('Actions de autenticação', () => {
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

    it('Deve retornar as informações de erro quando a autenticação falhar', () => {
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

  describe('Actions de cadastro de usuário', () => {
    it('Deve retornar as informações de cadastro', () => {
      const account = {
        email: 'email@teste.com',
        senha: '123',
        confirmacaosenha: '123'
      };
      const expected = {
        type: NEW_ACCOUNT,
        account
      };

      expect(authenticate(account)).toEqual(expected);
    });

    it('Deve retornar o estado atual do cadastro', () => {
      const accountCreated = true;

      const expected = {
        type: NEW_ACCOUNT_SUCCESS,
        accountCreated
      };
      expect(authenticateSuccess(accountCreated)).toEqual(expected);
    });
  });
});
