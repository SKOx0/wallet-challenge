import { CONVERT_CURRENCY_VALUE, GET_CONVERTED_CRYPTOCURRENCY_TO_BRL } from './constants';

export function convertCurrencyValue(currencies) {
  return {
    type: CONVERT_CURRENCY_VALUE,
    currencies
  };
}

export function getConvertedCryptocurrencyToBrl(convertedValue) {
  return {
    type: GET_CONVERTED_CRYPTOCURRENCY_TO_BRL,
    convertedValue
  };
}

export function exchangeBrlToCryptocurrency(exchangeInformations) {
  return {
    type: exchangeBrlToCryptocurrency,
    exchangeInformations
  };
}
