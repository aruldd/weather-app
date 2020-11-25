import * as types from '../constants/actionTypes';
import { getWeatherForecast } from '../utils/api';

// thunk for all fetching data
export const fetchWeather = (city) => {
  return function (dispatch, getState) {
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
  type: types.FETCH_WEATHER_BEGIN,
});

export const fetchWeatherSuccess = (weatherData) => ({
  type: types.FETCH_WEATHER_SUCCESS,
  payload: { weatherData },
});

export const fetchWeatherFailure = (error) => ({
  type: types.FETCH_WEATHER_FAILURE,
  payload: { error },
});
