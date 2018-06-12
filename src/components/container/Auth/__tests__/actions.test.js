import { AUTHENTICATE, AUTHENTICATE_SUCCESS, NEW_ACCOUNT, NEW_ACCOUNT_SUCCESS } from '../constants';

import { authenticate, authenticateSuccess, newAccount, newAccountSuccess } from '../actions';

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

      expect(newAccount(account)).toEqual(expected);
    });

    it('Deve retornar o estado atual do cadastro', () => {
      const accountCreated = true;

      const expected = {
        type: NEW_ACCOUNT_SUCCESS,
        accountCreated
      };
      expect(newAccountSuccess(accountCreated)).toEqual(expected);
    });
  });
});
