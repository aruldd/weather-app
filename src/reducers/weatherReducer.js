import {
  FETCH_WEATHER_BEGIN,
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_SUCCESS,
} from '../constants/actionTypes';

import initialState from './initialState';
import { groupBy } from 'lodash';
import { getFormattedDateFromTS } from '../utils/dates';
export default function weatherReducer(state = initialState.weather, action) {
  switch (action.type) {
    case FETCH_WEATHER_BEGIN:
      return { ...state, loading: true, error: false };
    case FETCH_WEATHER_SUCCESS: {
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

    case FETCH_WEATHER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}
