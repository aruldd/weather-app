import CONSTANTS from './constants';

describe('Constants Helper', () => {
  describe('API Key', () => {
    it('check if api key is set', () => {
      expect(CONSTANTS.API_KEY).toBeDefined();
    });

    it('check if api key is in length', () => {
      expect(CONSTANTS.API_KEY).toHaveLength(32);
    });
  });
});
