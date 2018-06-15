import { createSelector } from 'reselect';

const selectHome = (state) => state.home;

const makeSelectConvertedValue = () => createSelector(
  selectHome,
  (homeState) => homeState.convertedValue
);

const makeSelectConvertBrlInformations = () => createSelector(
  selectHome,
  (homeState) => homeState.convertBrlInformations
);

const makeSelectBalance = () => createSelector(
  selectHome,
  (homeState) => homeState.balance
);

const makeSelectCurrencyList = () => createSelector(
  selectHome,
  (homeState) => homeState.currencyList || []
);

const makeSelectTransactions = () => createSelector(
  selectHome,
  (homeState) => homeState.transactions || []
);

export {
  selectHome,
  makeSelectConvertedValue,
  makeSelectConvertBrlInformations,
  makeSelectBalance,
  makeSelectCurrencyList,
  makeSelectTransactions
};
