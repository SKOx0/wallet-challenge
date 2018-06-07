import { TESTE } from './constants';

function authReducer(state = {}, action) {
  switch (action.type) {
    case TESTE:
      return { ...state };
    default:
      return state;
  }
}

export default authReducer;
