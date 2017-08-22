import { createSelector } from 'reselect';

const getURL = state => state.url;

export const getCurrentPage = createSelector(
    getURL,
    ({ currentPage }) => currentPage,
);
