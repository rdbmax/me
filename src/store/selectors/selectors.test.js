import { getCurrentPage } from './url';

const mockState = {
  url: {
    currentPage: 'testPage',
  },
};

test('getCurrentPage should return currentPage', () => {
  expect(getCurrentPage(mockState)).toBe('testPage');
});
