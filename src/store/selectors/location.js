import { createSelector } from 'reselect';

const getLocation = state => state.location;

export const getPageType = createSelector(
    getLocation,
    ({ type }) => type,
);
