import { AUTHENTICATE, AUTHENTICATE_SUCCESS, NEW_ACCOUNT, NEW_ACCOUNT_SUCCESS } from '../constants';

import { authenticate, authenticateSuccess, newAccount, newAccountSuccess } from '../actions';

describe('Auth actions', () => {
  describe('Actions de autenticação', () => {
    it('Deve retornar as informações do usuário', () => {
      const payload = {
        email: 'pp@g.com',
        senha: '123'
      };
      const expected = {
        type: AUTHENTICATE,
        payload
      };

      expect(authenticate(payload)).toEqual(expected);
    });

    it('Deve retornar o estado atual da autenticação', () => {
      const payload = true;

      const expected = {
        type: AUTHENTICATE_SUCCESS,
        payload
      };
      expect(authenticateSuccess(payload)).toEqual(expected);
    });
  });

  describe('Actions de cadastro de usuário', () => {
    it('Deve retornar as informações de cadastro', () => {
      const payload = {
        email: 'email@teste.com',
        senha: '123',
        confirmacaosenha: '123'
      };
      const expected = {
        type: NEW_ACCOUNT,
        payload
      };

      expect(newAccount(payload)).toEqual(expected);
    });

    it('Deve retornar o estado atual do cadastro', () => {
      const payload = true;

      const expected = {
        type: NEW_ACCOUNT_SUCCESS,
        payload
      };
      expect(newAccountSuccess(payload)).toEqual(expected);
    });
  });
});
