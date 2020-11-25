import { API_KEY, BASE_URL } from './constants';
import fetch from 'node-fetch';

export function getWeatherForecast(city, units) {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=${units}`)
      .then((res) => res.json())
      .then((body) => {
        if (body.cod === '200') {
          resolve(body);
        } else {
          reject(body);
        }
      })
      .catch((err) => reject(err));
  });
}
