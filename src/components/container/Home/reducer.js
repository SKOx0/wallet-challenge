import { handleActions } from 'redux-actions';
import { exchargeCryptocurrency, listAvailibleCurrencies, availibleCurrencies, convertCurrencyValue } from './actions';

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
  [convertCurrencyValue]: (state, action) => ({
    ...state,
    convertInformations: action.payload
  })
}, {});

export default homeReducer;
