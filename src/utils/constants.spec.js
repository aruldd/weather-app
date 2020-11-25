import { API_KEY } from './constants';

describe('Constants Helper', () => {
  describe('API Key', () => {
    it('check if api key is set', () => {
      expect(API_KEY).toBeDefined();
    });

    it('check if api key is in length', () => {
      expect(API_KEY).toHaveLength(32);
    });
  });
});
