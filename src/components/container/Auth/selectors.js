import { createSelector } from 'reselect';

const selectAuth = (state) => state.auth;

const makeSelectAccountCreated = () => createSelector(
  selectAuth,
  (authState) => authState.accountCreated
);

const makeSelectIsAuthenticated = () => createSelector(
  selectAuth,
  (authState) => authState.isAuthenticated
);


export {
  selectAuth,
  makeSelectAccountCreated,
  makeSelectIsAuthenticated
};
