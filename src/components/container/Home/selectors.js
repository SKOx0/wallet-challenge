import { createSelector } from 'reselect';

const selectHome = (state) => state.home;

const makeSelectConvertedValue = () => createSelector(
  selectHome,
  (homeState) => homeState.convertedValue
);

export {
  selectHome,
  makeSelectConvertedValue
};
