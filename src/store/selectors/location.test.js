import { getPageType } from './';

const mockState = {
  location: {
    type: 'TEST',
  },
};

test('getPageType should return currentPage', () => {
  expect(getPageType(mockState)).toBe('TEST');
});
