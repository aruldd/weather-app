import React from 'react';
import { shallow, mount } from 'enzyme';
import WeatherCard from './WeatherCard';
import { create } from 'react-test-renderer';

describe('<WeatherCard />', () => {
  const weather = {
    dt: 1606284000,
    main: {
      temp: 25.73,
      feels_like: 24.6,
      temp_min: 25.45,
      temp_max: 25.73,
      pressure: 1008,
      sea_level: 1008,
      grnd_level: 1005,
      humidity: 92,
      temp_kf: 0.28,
    },
    weather: [
      {
        id: 502,
        main: 'Rain',
        description: 'heavy intensity rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 95,
    },
    wind: {
      speed: 10.2,
      deg: 30,
    },
    visibility: 10000,
    pop: 1,
    rain: {
      '3h': 16.31,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2020-11-25 06:00:00',
  };

  it('Should render everything with imperial units', () => {
    const system = 'imperial';
    const component = create(<WeatherCard weather={weather} system={system} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should render everything with metric units', () => {
    const system = 'metric';
    const component = create(<WeatherCard weather={weather} system={system} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
