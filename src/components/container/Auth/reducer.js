import { handleActions } from 'redux-actions';
import { authenticate, authenticateSuccess, newAccount, newAccountSuccess } from './actions';

const authReducer = handleActions({
  [authenticate]: (state, action) => ({
    ...state,
    user: action.payload
  }),
  [newAccount]: (state, action) => ({
    ...state,
    account: action.payload
  }),
  [authenticateSuccess]: (state, action) => ({
    ...state,
    isAuthenticated: action.payload
  }),
  [newAccountSuccess]: (state, action) => ({
    ...state,
    accountCreated: action.payload
  })
}, {});

export default authReducer;

