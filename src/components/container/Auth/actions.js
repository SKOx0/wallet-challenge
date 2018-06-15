import { createAction } from 'redux-actions';
import { AUTHENTICATE, AUTHENTICATE_SUCCESS, NEW_ACCOUNT, NEW_ACCOUNT_SUCCESS } from './constants';

export const authenticate = createAction(AUTHENTICATE);

export const authenticateSuccess = createAction(AUTHENTICATE_SUCCESS);

export const newAccount = createAction(NEW_ACCOUNT);

export const newAccountSuccess = createAction(NEW_ACCOUNT_SUCCESS);
