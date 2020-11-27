import * as types from '../constants/actionTypes';
import { getWeatherForecast } from '../utils/api';

// thunk for all fetching data
export const fetchWeather = (city) => {
  return async (dispatch, getState) => {
    const { ui } = getState();
    dispatch(fetchWeatherBegin());
    getWeatherForecast(city, ui.units).then(
      (weatherData) => {
        dispatch(fetchWeatherSuccess(weatherData));
      },
      (err) => dispatch(fetchWeatherFailure(err))
    );
  };
};

export const fetchWeatherBegin = () => ({
  type: types.WEATHER_FETCH_BEGIN,
});

export const fetchWeatherSuccess = (weatherData) => ({
  type: types.WEATHER_FETCH_SUCCESS,
  payload: { weatherData },
});

export const fetchWeatherFailure = (error) => ({
  type: types.WEATHER_FETCH_FAILURE,
  payload: { error },
});
