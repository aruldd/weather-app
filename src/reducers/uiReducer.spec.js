import { UI_SET_DATE, UI_SET_UNITS } from '../constants/actionTypes';
import initialState from './initialState';

import reducer from './uiReducer';

describe('Reducers::uiReducer', () => {
  const getInitialState = () => {
    return initialState.ui;
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle UI_SET_DATE', () => {
    const date = 'December 1, 2020';
    const action = { type: UI_SET_DATE, payload: { date } };
    const expected = { ...getInitialState(), date };

    expect(reducer(getInitialState(), action)).toEqual(expected);
  });
  it('should handle UI_SET_UNITS', () => {
    const units = 'imperial';
    const action = { type: UI_SET_UNITS, payload: { units } };
    const expected = { ...getInitialState(), units };

    expect(reducer(getInitialState(), action)).toEqual(expected);
  });
});
