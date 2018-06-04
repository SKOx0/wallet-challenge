import { TESTE } from './constants';

function appReducer(state = {}, action) {
  switch (action.type) {
    case TESTE:
      return state;
    default:
      return state;
  }
}

export default appReducer;
