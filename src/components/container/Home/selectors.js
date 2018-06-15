import { createSelector } from 'reselect';

const selectHome = (state) => state.home;

const makeSelectConvertedValue = () => createSelector(
  selectHome,
  (homeState) => homeState.convertedValue
);

const makeSelectConvertInformations = () => createSelector(
  selectHome,
  (homeState) => homeState.convertInformations
);

const makeSelectBalance = () => createSelector(
  selectHome,
  (homeState) => homeState.balance
);

export {
  selectHome,
  makeSelectConvertedValue,
  makeSelectConvertInformations,
  makeSelectBalance
};
