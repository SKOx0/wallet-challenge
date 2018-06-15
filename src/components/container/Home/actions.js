import { createAction } from 'redux-actions';
import { CONVERT_CURRENCY_VALUE, LIST_AVAILIBLE_CURRENCIES, AVAILIBLE_CURRENCIES, EXCHANGE_CRYPTOCURRECY, GET_BALANCE, CURRENT_BALANCE } from './constants';

export const convertCurrencyValue = createAction(CONVERT_CURRENCY_VALUE);

export const listAvailibleCurrencies = createAction(LIST_AVAILIBLE_CURRENCIES);

export const availibleCurrencies = createAction(AVAILIBLE_CURRENCIES);

export const exchargeCryptocurrency = createAction(EXCHANGE_CRYPTOCURRECY);

export const getBalance = createAction(GET_BALANCE);

export const currentBalance = createAction(CURRENT_BALANCE);
