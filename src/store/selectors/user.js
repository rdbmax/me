import { createSelector } from 'reselect';

const getUser = state => state.user;

export const getIsUserLoggedIn = createSelector(
  getUser,
  ({ id }) => Boolean(id),
);

export const getFirstName = createSelector(
  getUser,
  ({ firstName }) => firstName,
);
