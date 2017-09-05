import { getIsUserLoggedIn, getFirstName } from './';

const mockState = {
  user: {
    firstName: 'max',
    headline: '',
    id: 'bfehjbjcq',
    lastName: '',
    siteStandardProfileRequest: {
      url: '',
    },
  },
};

test('getIsUserLoggedIn should return true', () => {
  expect(getIsUserLoggedIn(mockState)).toBe(true);
});

test('getFirstName should return user first name', () => {
  expect(getFirstName(mockState)).toBe(mockState.user.firstName);
});
