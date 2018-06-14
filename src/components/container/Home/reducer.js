import { CONVERT_CURRENCY_VALUE, GET_CONVERTED_CRYPTOCURRENCY_TO_BRL, EXCHANGE_CRYPTOCURRECY, LIST_AVAILIBLE_CURRENCIES, AVAILIBLE_CURRENCIES } from './constants';

function homeReducer(state = {}, action) {
  switch (action.type) {
    case CONVERT_CURRENCY_VALUE:
      return { ...state, currencies: action.currencies };
    case GET_CONVERTED_CRYPTOCURRENCY_TO_BRL:
      return { ...state, convertedValue: action.convertedValue };
    case EXCHANGE_CRYPTOCURRECY:
      return { ...state, exchangeInformations: action.exchangeInformations };
    case LIST_AVAILIBLE_CURRENCIES:
      return { ...state, currentCurrency: action.currentCurrency };
    case AVAILIBLE_CURRENCIES:
      return { ...state, currencyList: action.currencyList };
    default:
      return state;
  }
}

export default homeReducer;
