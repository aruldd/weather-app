import { Card, Divider } from '@blueprintjs/core';
import PropTypes from 'prop-types';
import React from 'react';
import { getFormattedDateFromTS } from '../utils/dates';
import { UOM } from '../utils/units';
import { weatherProp } from '../types';
export const WeatherCard = (props) => {
  const { weather, system } = props;
  if (!weather) {
    return null;
  }
  const {
    dt,
    main,
    wind,
    visibility,
    weather: weather_,
    clouds,
    pop,
  } = weather;

  const weatherDescription = weather_[0];
  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = main;
  const { speed, deg } = wind;
  const { all } = clouds;
  return (
    <Card className="weather-card">
      <div className="image">
        {' '}
        <img
          src={`https://openweathermap.org/img/wn/${weatherDescription.icon}@2x.png`}
        />
      </div>
      <div className="cell">
        <h2 className="time ">{getFormattedDateFromTS(dt, 'LT')}</h2>
        <h4 className="temp">
          {temp} {UOM['temp'][system]}
        </h4>
        <div className="description">{weatherDescription.description}</div>
      </div>
      <Divider />
      <div className="cell">
        <h2>Feels like</h2>
        <div className="value">
          {feels_like} {UOM['feels_like'][system]}
        </div>
      </div>
      <Divider />

      <div className="cell">
        <h2>Min/Max</h2>
        <div className="value">
          {temp_min} {UOM['temp_min'][system]}/{temp_max}{' '}
          {UOM['temp_max'][system]}
        </div>
      </div>
      <Divider />

      <div className="cell">
        <h2>Precipitation Probability</h2>
        <div className="value">
          {Math.round(pop * 100)} {UOM['pop'][system]}
        </div>
      </div>
      <Divider />

      <div className="cell">
        <h2>Pressure</h2>
        <div className="value">
          {pressure} {UOM['pressure'][system]}
        </div>
      </div>
      <Divider />

      <div className="cell">
        <h2>Humidity</h2>
        <div className="value">
          {humidity} {UOM['humidity'][system]}
        </div>
      </div>
      <Divider />

      <div className="cell">
        <h2>Wind</h2>
        <div className="value">
          Speed: {speed} {UOM['speed'][system]}
        </div>
        <div className="value">
          Direction: {deg} {UOM['deg'][system]}
        </div>
      </div>
      <Divider />

      <div className="cell">
        <h2>Cloudiness</h2>
        <div className="value">
          {all} {UOM['all'][system]}
        </div>
      </div>
      <Divider />

      <div className="cell">
        <h2>Visibility</h2>
        <div className="value">
          {visibility / 1000} {UOM['visibility'][system]}
        </div>
      </div>
    </Card>
  );
};

WeatherCard.propTypes = {
  weather: weatherProp,
  system: PropTypes.string.isRequired,
};
export default WeatherCard;
