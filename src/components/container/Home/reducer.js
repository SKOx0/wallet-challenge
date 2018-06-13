import { CONVERT_CURRENCY_VALUE, GET_CONVERTED_CRYPTOCURRENCY_TO_BRL, EXCHANGE_BRL_TO_CRYPTOCURRECY } from './constants';

function homeReducer(state = {}, action) {
  switch (action.type) {
    case CONVERT_CURRENCY_VALUE:
      return { ...state, currencies: action.currencies };
    case GET_CONVERTED_CRYPTOCURRENCY_TO_BRL:
      return { ...state, convertedValue: action.convertedValue };
    case EXCHANGE_BRL_TO_CRYPTOCURRECY:
      return { ...state, exchangeInformations: action.exchangeInformations };
    default:
      return state;
  }
}

export default homeReducer;
