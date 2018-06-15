import { handleActions } from 'redux-actions';
import {
  exchargeCryptocurrency,
  listAvailibleCurrencies,
  availibleCurrencies,
  convertBrlToCryptocurrency,
  convertCryptocurrencyToCryptocurrency,
  convertCryptocurrencyToBrl,
  currentBalance
} from './actions';

const defaultState = {
  balance: {
    real: {
      saldo: 0
    },
    bitcoin: {
      saldo: 0
    },
    brita: {
      saldo: 0
    }
  }
};

const homeReducer = handleActions({
  [exchargeCryptocurrency]: (state, action) => ({
    ...state,
    exchangeInformations: action.payload
  }),
  [listAvailibleCurrencies]: (state, action) => ({
    ...state,
    currentCurrency: action.payload
  }),
  [availibleCurrencies]: (state, action) => ({
    ...state,
    currencyList: action.payload
  }),
  [convertBrlToCryptocurrency]: (state, action) => ({
    ...state,
    convertBrlInformations: action.payload
  }),
  [convertCryptocurrencyToBrl]: (state, action) => ({
    ...state,
    convertCryptocurrencyInformations: action.payload
  }),
  [convertCryptocurrencyToCryptocurrency]: (state, action) => ({
    ...state,
    convertCTCInformations: action.payload
  }),
  [currentBalance]: (state, action) => ({
    ...state,
    balance: action.payload
  })
}, defaultState);

export default homeReducer;
