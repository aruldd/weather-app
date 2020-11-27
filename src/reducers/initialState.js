export default {
  weather: {
    weatherData: {
      list: [],
      lastUpdatedAt: 0,
    },
    loading: false,
    error: false,
    errorData: {
      message: '',
    },
    dayWiseWeather: {},
  },
  ui: {
    date: '',
    units: 'metric',
  },
};
