import * as types from '../constants/actionTypes';

export const setUnits = (units) => ({
  type: types.UI_SET_UNITS,
  payload: { units },
});

export const setDate = (date) => ({
  type: types.UI_SET_DATE,
  payload: { date },
});
