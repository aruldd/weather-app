import { Callout, Spinner } from '@blueprintjs/core';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import initialState from '../reducers/initialState';
import CityHeader from './CityHeader';
import ConnectedSideBar, { SideBar } from './SideBar';

describe('<SideBar />', () => {
  const actions = { fetchWeather: jest.fn() };

  let loading = false;
  const weatherData = {
    cod: '200',
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1606381200,
        main: {
          temp: 21.55,
          feels_like: 19.34,
          temp_min: 21.36,
          temp_max: 21.55,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 908,
          humidity: 87,
          temp_kf: 0.19,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 87,
        },
        wind: {
          speed: 7.96,
          deg: 325,
        },
        visibility: 10000,
        pop: 0.68,
        rain: {
          '3h': 0.24,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-26 09:00:00',
      },
      {
        dt: 1606392000,
        main: {
          temp: 20.1,
          feels_like: 18.92,
          temp_min: 19.65,
          temp_max: 20.1,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 910,
          humidity: 89,
          temp_kf: 0.45,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 95,
        },
        wind: {
          speed: 5.82,
          deg: 330,
        },
        visibility: 10000,
        pop: 0.68,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-26 12:00:00',
      },
      {
        dt: 1606402800,
        main: {
          temp: 18.65,
          feels_like: 17.28,
          temp_min: 18.44,
          temp_max: 18.65,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 912,
          humidity: 91,
          temp_kf: 0.21,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 98,
        },
        wind: {
          speed: 5.44,
          deg: 333,
        },
        visibility: 10000,
        pop: 0.13,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-26 15:00:00',
      },
      {
        dt: 1606413600,
        main: {
          temp: 17.66,
          feels_like: 16.85,
          temp_min: 17.63,
          temp_max: 17.66,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 912,
          humidity: 94,
          temp_kf: 0.03,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.38,
          deg: 321,
        },
        visibility: 10000,
        pop: 0.09,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-26 18:00:00',
      },
      {
        dt: 1606424400,
        main: {
          temp: 17.21,
          feels_like: 17.33,
          temp_min: 17.21,
          temp_max: 17.21,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 910,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 87,
        },
        wind: {
          speed: 2.98,
          deg: 305,
        },
        visibility: 10000,
        pop: 0.06,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-26 21:00:00',
      },
      {
        dt: 1606435200,
        main: {
          temp: 17.91,
          feels_like: 18.18,
          temp_min: 17.91,
          temp_max: 17.91,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 912,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 92,
        },
        wind: {
          speed: 2.88,
          deg: 327,
        },
        visibility: 10000,
        pop: 0.13,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-27 00:00:00',
      },
      {
        dt: 1606446000,
        main: {
          temp: 18.83,
          feels_like: 17.9,
          temp_min: 18.83,
          temp_max: 18.83,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 914,
          humidity: 87,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.51,
          deg: 343,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-27 03:00:00',
      },
      {
        dt: 1606456800,
        main: {
          temp: 22.55,
          feels_like: 20.75,
          temp_min: 22.55,
          temp_max: 22.55,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 915,
          humidity: 75,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 86,
        },
        wind: {
          speed: 6.5,
          deg: 5,
        },
        visibility: 10000,
        pop: 0.05,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-27 06:00:00',
      },
      {
        dt: 1606467600,
        main: {
          temp: 22.29,
          feels_like: 20.05,
          temp_min: 22.29,
          temp_max: 22.29,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 912,
          humidity: 75,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 85,
        },
        wind: {
          speed: 6.98,
          deg: 0,
        },
        visibility: 10000,
        pop: 0.14,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-27 09:00:00',
      },
      {
        dt: 1606478400,
        main: {
          temp: 19.08,
          feels_like: 18.58,
          temp_min: 19.08,
          temp_max: 19.08,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 912,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 89,
        },
        wind: {
          speed: 3.93,
          deg: 3,
        },
        visibility: 10000,
        pop: 0.11,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-27 12:00:00',
      },
      {
        dt: 1606489200,
        main: {
          temp: 18.55,
          feels_like: 18.6,
          temp_min: 18.55,
          temp_max: 18.55,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 915,
          humidity: 87,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.96,
          deg: 1,
        },
        visibility: 10000,
        pop: 0.05,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-27 15:00:00',
      },
      {
        dt: 1606500000,
        main: {
          temp: 18.44,
          feels_like: 19.43,
          temp_min: 18.44,
          temp_max: 18.44,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 914,
          humidity: 89,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.75,
          deg: 6,
        },
        visibility: 10000,
        pop: 0.02,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-27 18:00:00',
      },
      {
        dt: 1606510800,
        main: {
          temp: 17.94,
          feels_like: 18.56,
          temp_min: 17.94,
          temp_max: 17.94,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 912,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 97,
        },
        wind: {
          speed: 2.49,
          deg: 358,
        },
        visibility: 10000,
        pop: 0.21,
        rain: {
          '3h': 0.11,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-27 21:00:00',
      },
      {
        dt: 1606521600,
        main: {
          temp: 17.96,
          feels_like: 18.93,
          temp_min: 17.96,
          temp_max: 17.96,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 913,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 91,
        },
        wind: {
          speed: 2.2,
          deg: 59,
        },
        visibility: 10000,
        pop: 0.17,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-28 00:00:00',
      },
      {
        dt: 1606532400,
        main: {
          temp: 19.33,
          feels_like: 19.66,
          temp_min: 19.33,
          temp_max: 19.33,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 915,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 3.62,
          deg: 82,
        },
        visibility: 10000,
        pop: 0.2,
        rain: {
          '3h': 0.12,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-28 03:00:00',
      },
      {
        dt: 1606543200,
        main: {
          temp: 22.11,
          feels_like: 21.69,
          temp_min: 22.11,
          temp_max: 22.11,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 915,
          humidity: 81,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 95,
        },
        wind: {
          speed: 5.02,
          deg: 96,
        },
        visibility: 10000,
        pop: 0.2,
        rain: {
          '3h': 0.22,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-28 06:00:00',
      },
      {
        dt: 1606554000,
        main: {
          temp: 23.96,
          feels_like: 24.39,
          temp_min: 23.96,
          temp_max: 23.96,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 913,
          humidity: 73,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 63,
        },
        wind: {
          speed: 3.88,
          deg: 106,
        },
        visibility: 10000,
        pop: 0.27,
        rain: {
          '3h': 0.17,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-28 09:00:00',
      },
      {
        dt: 1606564800,
        main: {
          temp: 21.55,
          feels_like: 22.37,
          temp_min: 21.55,
          temp_max: 21.55,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 913,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 48,
        },
        wind: {
          speed: 3.51,
          deg: 95,
        },
        visibility: 10000,
        pop: 0.68,
        rain: {
          '3h': 0.65,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-28 12:00:00',
      },
      {
        dt: 1606575600,
        main: {
          temp: 19.02,
          feels_like: 19.26,
          temp_min: 19.02,
          temp_max: 19.02,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 915,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 50,
        },
        wind: {
          speed: 3.87,
          deg: 77,
        },
        visibility: 10000,
        pop: 0.85,
        rain: {
          '3h': 0.51,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-28 15:00:00',
      },
      {
        dt: 1606586400,
        main: {
          temp: 18.38,
          feels_like: 18.64,
          temp_min: 18.38,
          temp_max: 18.38,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 915,
          humidity: 99,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 61,
        },
        wind: {
          speed: 3.76,
          deg: 69,
        },
        visibility: 10000,
        pop: 0.6,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-28 18:00:00',
      },
      {
        dt: 1606597200,
        main: {
          temp: 17.87,
          feels_like: 18.21,
          temp_min: 17.87,
          temp_max: 17.87,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 913,
          humidity: 98,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 61,
        },
        wind: {
          speed: 3.24,
          deg: 69,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-28 21:00:00',
      },
      {
        dt: 1606608000,
        main: {
          temp: 17.14,
          feels_like: 17.49,
          temp_min: 17.14,
          temp_max: 17.14,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 913,
          humidity: 99,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 73,
        },
        wind: {
          speed: 2.89,
          deg: 67,
        },
        visibility: 10000,
        pop: 0.06,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-29 00:00:00',
      },
      {
        dt: 1606618800,
        main: {
          temp: 19.53,
          feels_like: 19.24,
          temp_min: 19.53,
          temp_max: 19.53,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 916,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.74,
          deg: 73,
        },
        visibility: 10000,
        pop: 0.22,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-29 03:00:00',
      },
      {
        dt: 1606629600,
        main: {
          temp: 21.65,
          feels_like: 21.38,
          temp_min: 21.65,
          temp_max: 21.65,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 915,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.01,
          deg: 80,
        },
        visibility: 10000,
        pop: 0.4,
        rain: {
          '3h': 0.17,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-29 06:00:00',
      },
      {
        dt: 1606640400,
        main: {
          temp: 24.31,
          feels_like: 23.79,
          temp_min: 24.31,
          temp_max: 24.31,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 913,
          humidity: 75,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 92,
        },
        wind: {
          speed: 5.74,
          deg: 87,
        },
        visibility: 10000,
        pop: 0.74,
        rain: {
          '3h': 1.29,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-29 09:00:00',
      },
      {
        dt: 1606651200,
        main: {
          temp: 21.15,
          feels_like: 21,
          temp_min: 21.15,
          temp_max: 21.15,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 913,
          humidity: 89,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 77,
        },
        wind: {
          speed: 5,
          deg: 81,
        },
        visibility: 10000,
        pop: 0.87,
        rain: {
          '3h': 1.27,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-29 12:00:00',
      },
      {
        dt: 1606662000,
        main: {
          temp: 19.12,
          feels_like: 19.14,
          temp_min: 19.12,
          temp_max: 19.12,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 915,
          humidity: 98,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.46,
          deg: 85,
        },
        visibility: 10000,
        pop: 0.35,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-29 15:00:00',
      },
      {
        dt: 1606672800,
        main: {
          temp: 18.54,
          feels_like: 18.36,
          temp_min: 18.54,
          temp_max: 18.54,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 915,
          humidity: 98,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 4.38,
          deg: 73,
        },
        visibility: 10000,
        pop: 0.25,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-29 18:00:00',
      },
      {
        dt: 1606683600,
        main: {
          temp: 17.64,
          feels_like: 17.54,
          temp_min: 17.64,
          temp_max: 17.64,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 912,
          humidity: 99,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 85,
        },
        wind: {
          speed: 3.83,
          deg: 61,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-29 21:00:00',
      },
      {
        dt: 1606694400,
        main: {
          temp: 17.05,
          feels_like: 17.29,
          temp_min: 17.05,
          temp_max: 17.05,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 913,
          humidity: 98,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 73,
        },
        wind: {
          speed: 2.91,
          deg: 59,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-30 00:00:00',
      },
      {
        dt: 1606705200,
        main: {
          temp: 20,
          feels_like: 19.62,
          temp_min: 20,
          temp_max: 20,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 916,
          humidity: 87,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d',
          },
        ],
        clouds: {
          all: 38,
        },
        wind: {
          speed: 4.39,
          deg: 74,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-30 03:00:00',
      },
      {
        dt: 1606716000,
        main: {
          temp: 22.08,
          feels_like: 21.87,
          temp_min: 22.08,
          temp_max: 22.08,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 915,
          humidity: 81,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 56,
        },
        wind: {
          speed: 4.7,
          deg: 79,
        },
        visibility: 10000,
        pop: 0.2,
        rain: {
          '3h': 0.13,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-30 06:00:00',
      },
      {
        dt: 1606726800,
        main: {
          temp: 24.46,
          feels_like: 24.67,
          temp_min: 24.46,
          temp_max: 24.46,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 913,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 73,
        },
        wind: {
          speed: 4.37,
          deg: 65,
        },
        visibility: 10000,
        pop: 0.37,
        rain: {
          '3h': 0.28,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-30 09:00:00',
      },
      {
        dt: 1606737600,
        main: {
          temp: 21.51,
          feels_like: 22.29,
          temp_min: 21.51,
          temp_max: 21.51,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 913,
          humidity: 87,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 80,
        },
        wind: {
          speed: 3.67,
          deg: 61,
        },
        visibility: 10000,
        pop: 0.66,
        rain: {
          '3h': 0.79,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-30 12:00:00',
      },
      {
        dt: 1606748400,
        main: {
          temp: 19.01,
          feels_like: 19.68,
          temp_min: 19.01,
          temp_max: 19.01,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 915,
          humidity: 98,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 69,
        },
        wind: {
          speed: 3.46,
          deg: 70,
        },
        visibility: 10000,
        pop: 0.54,
        rain: {
          '3h': 0.32,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-30 15:00:00',
      },
      {
        dt: 1606759200,
        main: {
          temp: 18.25,
          feels_like: 18.85,
          temp_min: 18.25,
          temp_max: 18.25,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 915,
          humidity: 99,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 76,
        },
        wind: {
          speed: 3.19,
          deg: 69,
        },
        visibility: 4593,
        pop: 0.3,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-30 18:00:00',
      },
      {
        dt: 1606770000,
        main: {
          temp: 18.54,
          feels_like: 18.72,
          temp_min: 18.54,
          temp_max: 18.54,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 914,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 94,
        },
        wind: {
          speed: 3.67,
          deg: 63,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-30 21:00:00',
      },
      {
        dt: 1606780800,
        main: {
          temp: 18.26,
          feels_like: 18.49,
          temp_min: 18.26,
          temp_max: 18.26,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 914,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 97,
        },
        wind: {
          speed: 3.13,
          deg: 59,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-12-01 00:00:00',
      },
      {
        dt: 1606791600,
        main: {
          temp: 19.6,
          feels_like: 19.75,
          temp_min: 19.6,
          temp_max: 19.6,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 916,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 90,
        },
        wind: {
          speed: 3.3,
          deg: 54,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-12-01 03:00:00',
      },
      {
        dt: 1606802400,
        main: {
          temp: 23.87,
          feels_like: 22.26,
          temp_min: 23.87,
          temp_max: 23.87,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 916,
          humidity: 60,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 67,
        },
        wind: {
          speed: 4.93,
          deg: 66,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-12-01 06:00:00',
      },
    ],
    city: {
      id: 1269934,
      name: 'Hosūr',
      coord: {
        lat: 12.7167,
        lon: 77.8167,
      },
      country: 'IN',
      population: 103724,
      timezone: 19800,
      sunrise: 1606351949,
      sunset: 1606393204,
    },
    lastUpdatedAt: 1606374333,
  };
  let error = false;
  let errorData = {
    message: 'This is an error',
  };
  const dayWiseWeather = {
    'November 26, 2020': [
      {
        dt: 1606381200,
        main: {
          temp: 21.55,
          feels_like: 19.34,
          temp_min: 21.36,
          temp_max: 21.55,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 908,
          humidity: 87,
          temp_kf: 0.19,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 87,
        },
        wind: {
          speed: 7.96,
          deg: 325,
        },
        visibility: 10000,
        pop: 0.68,
        rain: {
          '3h': 0.24,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-26 09:00:00',
      },
      {
        dt: 1606392000,
        main: {
          temp: 20.1,
          feels_like: 18.92,
          temp_min: 19.65,
          temp_max: 20.1,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 910,
          humidity: 89,
          temp_kf: 0.45,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 95,
        },
        wind: {
          speed: 5.82,
          deg: 330,
        },
        visibility: 10000,
        pop: 0.68,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-26 12:00:00',
      },
      {
        dt: 1606402800,
        main: {
          temp: 18.65,
          feels_like: 17.28,
          temp_min: 18.44,
          temp_max: 18.65,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 912,
          humidity: 91,
          temp_kf: 0.21,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 98,
        },
        wind: {
          speed: 5.44,
          deg: 333,
        },
        visibility: 10000,
        pop: 0.13,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-26 15:00:00',
      },
      {
        dt: 1606413600,
        main: {
          temp: 17.66,
          feels_like: 16.85,
          temp_min: 17.63,
          temp_max: 17.66,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 912,
          humidity: 94,
          temp_kf: 0.03,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.38,
          deg: 321,
        },
        visibility: 10000,
        pop: 0.09,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-26 18:00:00',
      },
    ],
    'November 27, 2020': [
      {
        dt: 1606424400,
        main: {
          temp: 17.21,
          feels_like: 17.33,
          temp_min: 17.21,
          temp_max: 17.21,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 910,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 87,
        },
        wind: {
          speed: 2.98,
          deg: 305,
        },
        visibility: 10000,
        pop: 0.06,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-26 21:00:00',
      },
      {
        dt: 1606435200,
        main: {
          temp: 17.91,
          feels_like: 18.18,
          temp_min: 17.91,
          temp_max: 17.91,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 912,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 92,
        },
        wind: {
          speed: 2.88,
          deg: 327,
        },
        visibility: 10000,
        pop: 0.13,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-27 00:00:00',
      },
      {
        dt: 1606446000,
        main: {
          temp: 18.83,
          feels_like: 17.9,
          temp_min: 18.83,
          temp_max: 18.83,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 914,
          humidity: 87,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.51,
          deg: 343,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-27 03:00:00',
      },
      {
        dt: 1606456800,
        main: {
          temp: 22.55,
          feels_like: 20.75,
          temp_min: 22.55,
          temp_max: 22.55,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 915,
          humidity: 75,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 86,
        },
        wind: {
          speed: 6.5,
          deg: 5,
        },
        visibility: 10000,
        pop: 0.05,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-27 06:00:00',
      },
      {
        dt: 1606467600,
        main: {
          temp: 22.29,
          feels_like: 20.05,
          temp_min: 22.29,
          temp_max: 22.29,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 912,
          humidity: 75,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 85,
        },
        wind: {
          speed: 6.98,
          deg: 0,
        },
        visibility: 10000,
        pop: 0.14,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-27 09:00:00',
      },
      {
        dt: 1606478400,
        main: {
          temp: 19.08,
          feels_like: 18.58,
          temp_min: 19.08,
          temp_max: 19.08,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 912,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 89,
        },
        wind: {
          speed: 3.93,
          deg: 3,
        },
        visibility: 10000,
        pop: 0.11,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-27 12:00:00',
      },
      {
        dt: 1606489200,
        main: {
          temp: 18.55,
          feels_like: 18.6,
          temp_min: 18.55,
          temp_max: 18.55,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 915,
          humidity: 87,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.96,
          deg: 1,
        },
        visibility: 10000,
        pop: 0.05,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-27 15:00:00',
      },
      {
        dt: 1606500000,
        main: {
          temp: 18.44,
          feels_like: 19.43,
          temp_min: 18.44,
          temp_max: 18.44,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 914,
          humidity: 89,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.75,
          deg: 6,
        },
        visibility: 10000,
        pop: 0.02,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-27 18:00:00',
      },
    ],
    'November 28, 2020': [
      {
        dt: 1606510800,
        main: {
          temp: 17.94,
          feels_like: 18.56,
          temp_min: 17.94,
          temp_max: 17.94,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 912,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 97,
        },
        wind: {
          speed: 2.49,
          deg: 358,
        },
        visibility: 10000,
        pop: 0.21,
        rain: {
          '3h': 0.11,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-27 21:00:00',
      },
      {
        dt: 1606521600,
        main: {
          temp: 17.96,
          feels_like: 18.93,
          temp_min: 17.96,
          temp_max: 17.96,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 913,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 91,
        },
        wind: {
          speed: 2.2,
          deg: 59,
        },
        visibility: 10000,
        pop: 0.17,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-28 00:00:00',
      },
      {
        dt: 1606532400,
        main: {
          temp: 19.33,
          feels_like: 19.66,
          temp_min: 19.33,
          temp_max: 19.33,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 915,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 3.62,
          deg: 82,
        },
        visibility: 10000,
        pop: 0.2,
        rain: {
          '3h': 0.12,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-28 03:00:00',
      },
      {
        dt: 1606543200,
        main: {
          temp: 22.11,
          feels_like: 21.69,
          temp_min: 22.11,
          temp_max: 22.11,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 915,
          humidity: 81,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 95,
        },
        wind: {
          speed: 5.02,
          deg: 96,
        },
        visibility: 10000,
        pop: 0.2,
        rain: {
          '3h': 0.22,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-28 06:00:00',
      },
      {
        dt: 1606554000,
        main: {
          temp: 23.96,
          feels_like: 24.39,
          temp_min: 23.96,
          temp_max: 23.96,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 913,
          humidity: 73,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 63,
        },
        wind: {
          speed: 3.88,
          deg: 106,
        },
        visibility: 10000,
        pop: 0.27,
        rain: {
          '3h': 0.17,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-28 09:00:00',
      },
      {
        dt: 1606564800,
        main: {
          temp: 21.55,
          feels_like: 22.37,
          temp_min: 21.55,
          temp_max: 21.55,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 913,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 48,
        },
        wind: {
          speed: 3.51,
          deg: 95,
        },
        visibility: 10000,
        pop: 0.68,
        rain: {
          '3h': 0.65,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-28 12:00:00',
      },
      {
        dt: 1606575600,
        main: {
          temp: 19.02,
          feels_like: 19.26,
          temp_min: 19.02,
          temp_max: 19.02,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 915,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 50,
        },
        wind: {
          speed: 3.87,
          deg: 77,
        },
        visibility: 10000,
        pop: 0.85,
        rain: {
          '3h': 0.51,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-28 15:00:00',
      },
      {
        dt: 1606586400,
        main: {
          temp: 18.38,
          feels_like: 18.64,
          temp_min: 18.38,
          temp_max: 18.38,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 915,
          humidity: 99,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 61,
        },
        wind: {
          speed: 3.76,
          deg: 69,
        },
        visibility: 10000,
        pop: 0.6,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-28 18:00:00',
      },
    ],
    'November 29, 2020': [
      {
        dt: 1606597200,
        main: {
          temp: 17.87,
          feels_like: 18.21,
          temp_min: 17.87,
          temp_max: 17.87,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 913,
          humidity: 98,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 61,
        },
        wind: {
          speed: 3.24,
          deg: 69,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-28 21:00:00',
      },
      {
        dt: 1606608000,
        main: {
          temp: 17.14,
          feels_like: 17.49,
          temp_min: 17.14,
          temp_max: 17.14,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 913,
          humidity: 99,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 73,
        },
        wind: {
          speed: 2.89,
          deg: 67,
        },
        visibility: 10000,
        pop: 0.06,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-29 00:00:00',
      },
      {
        dt: 1606618800,
        main: {
          temp: 19.53,
          feels_like: 19.24,
          temp_min: 19.53,
          temp_max: 19.53,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 916,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.74,
          deg: 73,
        },
        visibility: 10000,
        pop: 0.22,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-29 03:00:00',
      },
      {
        dt: 1606629600,
        main: {
          temp: 21.65,
          feels_like: 21.38,
          temp_min: 21.65,
          temp_max: 21.65,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 915,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.01,
          deg: 80,
        },
        visibility: 10000,
        pop: 0.4,
        rain: {
          '3h': 0.17,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-29 06:00:00',
      },
      {
        dt: 1606640400,
        main: {
          temp: 24.31,
          feels_like: 23.79,
          temp_min: 24.31,
          temp_max: 24.31,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 913,
          humidity: 75,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 92,
        },
        wind: {
          speed: 5.74,
          deg: 87,
        },
        visibility: 10000,
        pop: 0.74,
        rain: {
          '3h': 1.29,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-29 09:00:00',
      },
      {
        dt: 1606651200,
        main: {
          temp: 21.15,
          feels_like: 21,
          temp_min: 21.15,
          temp_max: 21.15,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 913,
          humidity: 89,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 77,
        },
        wind: {
          speed: 5,
          deg: 81,
        },
        visibility: 10000,
        pop: 0.87,
        rain: {
          '3h': 1.27,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-29 12:00:00',
      },
      {
        dt: 1606662000,
        main: {
          temp: 19.12,
          feels_like: 19.14,
          temp_min: 19.12,
          temp_max: 19.12,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 915,
          humidity: 98,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.46,
          deg: 85,
        },
        visibility: 10000,
        pop: 0.35,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-29 15:00:00',
      },
      {
        dt: 1606672800,
        main: {
          temp: 18.54,
          feels_like: 18.36,
          temp_min: 18.54,
          temp_max: 18.54,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 915,
          humidity: 98,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 4.38,
          deg: 73,
        },
        visibility: 10000,
        pop: 0.25,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-29 18:00:00',
      },
    ],
    'November 30, 2020': [
      {
        dt: 1606683600,
        main: {
          temp: 17.64,
          feels_like: 17.54,
          temp_min: 17.64,
          temp_max: 17.64,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 912,
          humidity: 99,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 85,
        },
        wind: {
          speed: 3.83,
          deg: 61,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-29 21:00:00',
      },
      {
        dt: 1606694400,
        main: {
          temp: 17.05,
          feels_like: 17.29,
          temp_min: 17.05,
          temp_max: 17.05,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 913,
          humidity: 98,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 73,
        },
        wind: {
          speed: 2.91,
          deg: 59,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-30 00:00:00',
      },
      {
        dt: 1606705200,
        main: {
          temp: 20,
          feels_like: 19.62,
          temp_min: 20,
          temp_max: 20,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 916,
          humidity: 87,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d',
          },
        ],
        clouds: {
          all: 38,
        },
        wind: {
          speed: 4.39,
          deg: 74,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-30 03:00:00',
      },
      {
        dt: 1606716000,
        main: {
          temp: 22.08,
          feels_like: 21.87,
          temp_min: 22.08,
          temp_max: 22.08,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 915,
          humidity: 81,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 56,
        },
        wind: {
          speed: 4.7,
          deg: 79,
        },
        visibility: 10000,
        pop: 0.2,
        rain: {
          '3h': 0.13,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-30 06:00:00',
      },
      {
        dt: 1606726800,
        main: {
          temp: 24.46,
          feels_like: 24.67,
          temp_min: 24.46,
          temp_max: 24.46,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 913,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 73,
        },
        wind: {
          speed: 4.37,
          deg: 65,
        },
        visibility: 10000,
        pop: 0.37,
        rain: {
          '3h': 0.28,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-30 09:00:00',
      },
      {
        dt: 1606737600,
        main: {
          temp: 21.51,
          feels_like: 22.29,
          temp_min: 21.51,
          temp_max: 21.51,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 913,
          humidity: 87,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 80,
        },
        wind: {
          speed: 3.67,
          deg: 61,
        },
        visibility: 10000,
        pop: 0.66,
        rain: {
          '3h': 0.79,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-11-30 12:00:00',
      },
      {
        dt: 1606748400,
        main: {
          temp: 19.01,
          feels_like: 19.68,
          temp_min: 19.01,
          temp_max: 19.01,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 915,
          humidity: 98,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 69,
        },
        wind: {
          speed: 3.46,
          deg: 70,
        },
        visibility: 10000,
        pop: 0.54,
        rain: {
          '3h': 0.32,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-30 15:00:00',
      },
      {
        dt: 1606759200,
        main: {
          temp: 18.25,
          feels_like: 18.85,
          temp_min: 18.25,
          temp_max: 18.25,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 915,
          humidity: 99,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 76,
        },
        wind: {
          speed: 3.19,
          deg: 69,
        },
        visibility: 4593,
        pop: 0.3,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-30 18:00:00',
      },
    ],
    'December 1, 2020': [
      {
        dt: 1606770000,
        main: {
          temp: 18.54,
          feels_like: 18.72,
          temp_min: 18.54,
          temp_max: 18.54,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 914,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 94,
        },
        wind: {
          speed: 3.67,
          deg: 63,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-11-30 21:00:00',
      },
      {
        dt: 1606780800,
        main: {
          temp: 18.26,
          feels_like: 18.49,
          temp_min: 18.26,
          temp_max: 18.26,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 914,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 97,
        },
        wind: {
          speed: 3.13,
          deg: 59,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-12-01 00:00:00',
      },
      {
        dt: 1606791600,
        main: {
          temp: 19.6,
          feels_like: 19.75,
          temp_min: 19.6,
          temp_max: 19.6,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 916,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 90,
        },
        wind: {
          speed: 3.3,
          deg: 54,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-12-01 03:00:00',
      },
      {
        dt: 1606802400,
        main: {
          temp: 23.87,
          feels_like: 22.26,
          temp_min: 23.87,
          temp_max: 23.87,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 916,
          humidity: 60,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 67,
        },
        wind: {
          speed: 4.93,
          deg: 66,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-12-01 06:00:00',
      },
    ],
  };
  let ui = {
    date: '',
    units: 'metric',
  };
  const uiActions = {
    setUnits: jest.fn(),
    setDate: jest.fn(),
  };
  it('should contain <CityHeader />', () => {
    const wrapper = shallow(
      <SideBar
        actions={actions}
        loading={loading}
        weatherData={weatherData}
        error={error}
        errorData={errorData}
        dayWiseWeather={dayWiseWeather}
        ui={ui}
        uiActions={uiActions}
      />
    );

    expect(wrapper.find(CityHeader).length).toEqual(1);
  });
  it('should show/hide loading', () => {
    loading = true;
    const wrapper = mount(
      <SideBar
        actions={actions}
        loading={loading}
        weatherData={weatherData}
        error={error}
        errorData={errorData}
        dayWiseWeather={dayWiseWeather}
        ui={ui}
        uiActions={uiActions}
      />
    );
    expect(wrapper.find(Spinner)).toExist();
    loading = false;
    wrapper.setProps({ loading });
    expect(wrapper.find(Spinner)).not.toExist();
  });
  it('should show error callout when there is error', () => {
    error = true;
    const wrapper = mount(
      <SideBar
        actions={actions}
        loading={loading}
        weatherData={weatherData}
        error={error}
        errorData={errorData}
        dayWiseWeather={dayWiseWeather}
        ui={ui}
        uiActions={uiActions}
      />
    );
    expect(wrapper.find(Callout)).toExist();
    error = false;
    wrapper.setProps({ error });
    expect(wrapper.find(Callout)).not.toExist();
  });
  it('Should fetch weather when initializing', () => {
    shallow(
      <SideBar
        actions={actions}
        loading={loading}
        weatherData={weatherData}
        error={error}
        errorData={errorData}
        dayWiseWeather={dayWiseWeather}
        ui={ui}
        uiActions={uiActions}
      />
    );
    expect(actions.fetchWeather).toBeCalled();
  });
  it('Should search when input is changes', () => {
    const wrapper = mount(
      <SideBar
        actions={actions}
        loading={loading}
        weatherData={weatherData}
        error={error}
        errorData={errorData}
        dayWiseWeather={dayWiseWeather}
        ui={ui}
        uiActions={uiActions}
      />
    );
    wrapper
      .find('input')
      .first()
      .simulate('change', { target: { value: 'chennai' } });
    setTimeout(() => {
      expect(actions.fetchWeather).toBeCalledWith('chennai');
    }, 500);
  });
  it('Should change unit', () => {
    const wrapper = mount(
      <SideBar
        actions={actions}
        loading={loading}
        weatherData={weatherData}
        error={error}
        errorData={errorData}
        dayWiseWeather={dayWiseWeather}
        ui={ui}
        uiActions={uiActions}
      />
    );
    wrapper.find('#unit-selector button').last().simulate('click');
    expect(uiActions.setUnits).toBeCalledWith('imperial');
    wrapper.find('#unit-selector button').first().simulate('click');
    expect(uiActions.setUnits).toBeCalledWith('metric');
  });
  it('should show date selector', () => {
    const wrapper = mount(
      <SideBar
        actions={actions}
        loading={loading}
        weatherData={weatherData}
        error={error}
        errorData={errorData}
        dayWiseWeather={dayWiseWeather}
        ui={ui}
        uiActions={uiActions}
      />
    );
    expect(wrapper.find('#date-selection button').length).toEqual(6);
  });
  it('Should change date', () => {
    const wrapper = mount(
      <SideBar
        actions={actions}
        loading={loading}
        weatherData={weatherData}
        error={error}
        errorData={errorData}
        dayWiseWeather={dayWiseWeather}
        ui={ui}
        uiActions={uiActions}
      />
    );
    wrapper.find('#date-selection button').last().simulate('click');
    expect(uiActions.setDate).toBeCalledWith('December 1, 2020');
  });
  it('should match snapshot when data is present', () => {
    const component = create(
      <SideBar
        actions={actions}
        loading={loading}
        weatherData={weatherData}
        error={error}
        errorData={errorData}
        dayWiseWeather={dayWiseWeather}
        ui={ui}
        uiActions={uiActions}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot when no data is present', () => {
    const store = configureMockStore()(initialState);
    const component = create(
      <Provider store={store}>
        <ConnectedSideBar />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
