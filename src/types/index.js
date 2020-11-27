// Centralized propType definitions
import { arrayOf, number, shape, string } from 'prop-types';

export const weatherProp = shape({
  dt: number.isRequired,
  main: shape({
    temp: number.isRequired,
    feels_like: number.isRequired,
    temp_min: number.isRequired,
    temp_max: number.isRequired,
    pressure: number.isRequired,
    sea_level: number.isRequired,
    grnd_level: number.isRequired,
    humidity: number.isRequired,
  }),
  weather: arrayOf(
    shape({
      description: string.isRequired,
      icon: string.isRequired,
    })
  ),
  clouds: shape({
    all: number.isRequired,
  }),
  wind: shape({
    speed: number.isRequired,
    deg: number.isRequired,
  }),
  visibility: number.isRequired,
  pop: number.isRequired,
  rain: shape({
    '3h': number.isRequired,
  }),
});

export const cityProp = shape({
  name: string.isRequired,
  country: string.isRequired,
  sunrise: number.isRequired,
  sunset: number.isRequired,
});
