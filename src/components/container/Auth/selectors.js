import { createSelector } from 'reselect';

const selectAuth = (state) => state.auth;

const makeSelectAccountCreated = () => createSelector(
  selectAuth,
  (authState) => authState.accountCreated
);

export {
  selectAuth,
  makeSelectAccountCreated,
};
