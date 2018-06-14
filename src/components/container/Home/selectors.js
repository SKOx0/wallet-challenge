import { createSelector } from 'reselect';

const selectHome = (state) => state.home;

const makeSelectConvertedValue = () => createSelector(
  selectHome,
  (homeState) => homeState.convertedValue
);

const makeSelectCurrencies = () => createSelector(
  selectHome,
  (homeState) => homeState.currencies
);

export {
  selectHome,
  makeSelectConvertedValue,
  makeSelectCurrencies
};
