import { getFormattedDateFromTS } from './dates';

describe('Date Helper', () => {
  describe('getFormattedDateTime', () => {
    it('should return formatted date', () => {
      const ts = 1606454058;
      expect(getFormattedDateFromTS(ts, 'LL')).toEqual('November 27, 2020');
      expect(getFormattedDateFromTS(ts, 'LT')).toEqual('10:44 AM');
    });
  });
});
