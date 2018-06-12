import { AUTHENTICATE, AUTHENTICATE_SUCCESS, NEW_ACCOUNT, NEW_ACCOUNT_SUCCESS } from './constants';

function authReducer(state = {}, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, user: action.user };
    case AUTHENTICATE_SUCCESS:
      return { ...state, isAuthenticated: action.isAuthenticated };
    case NEW_ACCOUNT:
      return { ...state, account: action.account };
    case NEW_ACCOUNT_SUCCESS:
      return { ...state, accountCreated: action.accountCreated };
    default:
      return state;
  }
}

export default authReducer;
