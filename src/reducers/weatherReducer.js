import {
  WEATHER_FETCH_BEGIN,
  WEATHER_FETCH_FAILURE,
  WEATHER_FETCH_SUCCESS,
} from '../constants/actionTypes';

import initialState from './initialState';
import { groupBy } from 'lodash';
import { getFormattedDateFromTS } from '../utils/dates';
const weatherReducer = (state = initialState.weather, action) => {
  switch (action.type) {
    case WEATHER_FETCH_BEGIN:
      return { ...state, loading: true, error: false };
    case WEATHER_FETCH_SUCCESS: {
      const dayWiseWeather = groupBy(action.payload.weatherData.list, (w) =>
        getFormattedDateFromTS(w.dt, 'LL')
      );
      return {
        ...state,
        loading: false,
        weatherData: {
          ...action.payload.weatherData,
          lastUpdatedAt: Math.floor(Date.now() / 1000),
        },
        error: false,
        dayWiseWeather,
      };
    }

    case WEATHER_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorData: action.payload.error,
      };

    default:
      return state;
  }
};

export default weatherReducer;
