import { AUTHENTICATE, AUTHENTICATE_SUCCESS, NEW_ACCOUNT, NEW_ACCOUNT_SUCCESS } from './constants';

export function authenticate(user) {
  return {
    type: AUTHENTICATE,
    user
  };
}

export function authenticateSuccess(isAuthenticated) {
  return {
    type: AUTHENTICATE_SUCCESS,
    isAuthenticated
  };
}

export function newAccount(account) {
  return {
    type: NEW_ACCOUNT,
    account
  };
}

export function newAccountSuccess(accountCreated) {
  return {
    type: NEW_ACCOUNT_SUCCESS,
    accountCreated
  };
}
