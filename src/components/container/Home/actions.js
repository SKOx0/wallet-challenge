import { createAction } from 'redux-actions';
import {
  CONVERT_BRL_CURRENCY,
  LIST_AVAILIBLE_CURRENCIES,
  AVAILIBLE_CURRENCIES,
  EXCHANGE_CRYPTOCURRECY,
  GET_BALANCE, CURRENT_BALANCE,
  CONVERT_CRYPTOCURRENCY_TO_BRL,
  CONVERT_CRYPTOCURRENCY_TO_CRYPTOCURRENCY,
  TRANSACTIONS,
  LIST_TRANSACTIONS
} from './constants';

export const convertBrlToCryptocurrency = createAction(CONVERT_BRL_CURRENCY);

export const convertCryptocurrencyToBrl = createAction(CONVERT_CRYPTOCURRENCY_TO_BRL);

export const convertCryptocurrencyToCryptocurrency = createAction(CONVERT_CRYPTOCURRENCY_TO_CRYPTOCURRENCY);

export const listAvailibleCurrencies = createAction(LIST_AVAILIBLE_CURRENCIES);

export const availibleCurrencies = createAction(AVAILIBLE_CURRENCIES);

export const transactions = createAction(TRANSACTIONS);

export const listTransactions = createAction(LIST_TRANSACTIONS);

export const exchargeCryptocurrency = createAction(EXCHANGE_CRYPTOCURRECY);

export const getBalance = createAction(GET_BALANCE);

export const currentBalance = createAction(CURRENT_BALANCE);

