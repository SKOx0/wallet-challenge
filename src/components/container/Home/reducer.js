import { CONVERT_CURRENCY_VALUE, GET_CONVERTED_CRYPTOCURRENCY_TO_BRL } from './constants';

function homeReducer(state = {}, action) {
  switch (action.type) {
    case CONVERT_CURRENCY_VALUE:
      return { ...state, currencies: action.currencies };
    case GET_CONVERTED_CRYPTOCURRENCY_TO_BRL:
      return { ...state, convertedValue: action.convertedValue };
    default:
      return state;
  }
}

export default homeReducer;
