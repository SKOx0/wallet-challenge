import { CONVERT_CURRENCY_VALUE, GET_CONVERTED_CRYPTOCURRENCY_TO_BRL, LIST_AVAILIBLE_CURRENCIES, AVAILIBLE_CURRENCIES, EXCHANGE_CRYPTOCURRECY } from './constants';

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

export function listAvailibleCurrencies(currentCurrency) {
  return {
    type: LIST_AVAILIBLE_CURRENCIES,
    currentCurrency
  };
}


export function availibleCurrencies(currencyList) {
  return {
    type: AVAILIBLE_CURRENCIES,
    currencyList
  };
}

export function exchargeCryptocurrency(exchangeInformations) {
  return {
    type: EXCHANGE_CRYPTOCURRECY,
    exchangeInformations
  };
}
