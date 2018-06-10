import { AUTHENTICATE, AUTHENTICATE_FAILURE, AUTHENTICATE_SUCCESS } from './constants';

function authReducer(state = {}, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, user: action.user };
    case AUTHENTICATE_FAILURE:
      return { ...state, error: action.error };
    case AUTHENTICATE_SUCCESS:
      return { ...state, isAuthenticated: action.isAuthenticated };
    default:
      return state;
  }
}

export default authReducer;
