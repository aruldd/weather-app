import { UI_SET_DATE, UI_SET_UNITS } from '../constants/actionTypes';
import initialState from './initialState';

const uiReducer = (state = initialState.ui, action) => {
  switch (action.type) {
    case UI_SET_DATE:
      return { ...state, date: action.payload.date };
    case UI_SET_UNITS:
      return { ...state, units: action.payload.units };
    default:
      return state;
  }
};

export default uiReducer;
