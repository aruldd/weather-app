import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getFormattedDateFromTS } from '../utils/dates';
import { WeatherCard } from './WeatherCard';
import { weatherProp } from '../types';
import { keys } from 'lodash';
const HomePage = (props) => {
  const { dayWiseWeatherList, ui, dayWiseWeather } = props;
  return (
    <>
      {keys(dayWiseWeather).length
        ? dayWiseWeather[
            ui.date === ''
              ? getFormattedDateFromTS(dayWiseWeatherList[0].dt, 'LL')
              : ui.date
          ].map((weather, index) => {
            return (
              <WeatherCard key={index} weather={weather} system={ui.units} />
            );
          })
        : null}
    </>
  );
};

HomePage.propTypes = {
  dayWiseWeatherList: PropTypes.arrayOf(weatherProp).isRequired,
  dayWiseWeather: PropTypes.objectOf(PropTypes.arrayOf(weatherProp)).isRequired,
  ui: PropTypes.shape({
    date: PropTypes.string.isRequired,
    units: PropTypes.string.isRequired,
  }),
};

function mapStateToProps(state) {
  return {
    dayWiseWeatherList: state.weather.weatherData.list,
    dayWiseWeather: state.weather.dayWiseWeather,
    ui: state.ui,
  };
}

export default connect(mapStateToProps)(HomePage);
