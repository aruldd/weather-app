import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './weatherActions';
jest.mock('../utils/api');
import { getWeatherForecast } from '../utils/api';

describe('Actions', () => {
  const expectedBegin = {
    type: ActionTypes.WEATHER_FETCH_BEGIN,
  };
  const expectedSuccess = {
    type: ActionTypes.WEATHER_FETCH_SUCCESS,
    payload: { weatherData: {} },
  };
  const expectedFailure = {
    type: ActionTypes.WEATHER_FETCH_FAILURE,
    payload: { error: {} },
  };
  it('should create an action for fetch weather begin', () => {
    const actual = ActionCreators.fetchWeatherBegin();
    expect(actual).toEqual(expectedBegin);
  });
  it('should create an action for fetch weather success', () => {
    const actual = ActionCreators.fetchWeatherSuccess({});
    expect(actual).toEqual(expectedSuccess);
  });
  it('should create an action for fetch weather failure', () => {
    const actual = ActionCreators.fetchWeatherFailure({});
    expect(actual).toEqual(expectedFailure);
  });
  it('should return a function for fetch weather and call the actions for fetching weather', async () => {
    expect(typeof ActionCreators.fetchWeather('chennai')).toEqual('function');
  });
  it('should call the actions for fetching weather and return data if success', async () => {
    const dispatch = jest.fn();
    const returnValue = new Promise((resolve, reject) => {
      resolve({});
    });
    const getState = () => {
      return {
        ui: {
          units: 'imperial',
        },
      };
    };
    getWeatherForecast.mockReturnValue(returnValue);

    await ActionCreators.fetchWeather('chennai')(dispatch, getState);
    expect(dispatch).toBeCalledWith(expectedBegin);
    expect(getWeatherForecast).toBeCalled();
    expect(dispatch).toHaveBeenLastCalledWith(expectedSuccess);
  });
  it('should call the actions for fetching weather and return error if failure', async () => {
    const dispatch = jest.fn();
    const returnValue = new Promise((resolve, reject) => {
      reject({});
    });
    const getState = () => {
      return {
        ui: {
          units: 'imperial',
        },
      };
    };
    getWeatherForecast.mockReturnValue(returnValue);

    await ActionCreators.fetchWeather('chennai')(dispatch, getState);
    expect(dispatch).toBeCalledWith(expectedBegin);
    expect(getWeatherForecast).toBeCalled();
    expect(dispatch).toHaveBeenLastCalledWith(expectedFailure);
  });
});
