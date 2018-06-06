import { TESTE } from './constants';

function homeReducer(state = {}, action) {
  switch (action.type) {
    case TESTE:
      return { ...state };
    default:
      return state;
  }
}

export default homeReducer;
