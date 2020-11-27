import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './uiActions';

describe('Actions', () => {
  it('should create an action to set ui date', () => {
    const date = 'December 1, 2020';
    const expected = {
      type: ActionTypes.UI_SET_DATE,
      payload: { date: 'December 1, 2020' },
    };
    const actual = ActionCreators.setDate(date);
    expect(actual).toEqual(expected);
  });
  it('should create an action to set ui units', () => {
    const units = 'imperial';
    const expected = {
      type: ActionTypes.UI_SET_UNITS,
      payload: { units: 'imperial' },
    };
    const actual = ActionCreators.setUnits(units);
    expect(actual).toEqual(expected);
  });
});
