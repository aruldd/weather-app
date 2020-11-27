export default {
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0,
    },
  },
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
