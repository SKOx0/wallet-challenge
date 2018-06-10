import { AUTHENTICATE, AUTHENTICATE_FAILURE, AUTHENTICATE_SUCCESS } from './constants';

export function authenticate(user) {
  return {
    type: AUTHENTICATE,
    user
  };
}

export function authenticateError(error) {
  return {
    type: AUTHENTICATE_FAILURE,
    error
  };
}

export function authenticateSuccess(isAuthenticated) {
  return {
    type: AUTHENTICATE_SUCCESS,
    isAuthenticated
  };
}
