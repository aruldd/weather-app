import { Button, ButtonGroup, Callout, Icon, Spinner } from '@blueprintjs/core';
import { keys, upperFirst } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useDebounce } from 'use-debounce';
import * as uiActions from '../actions/uiActions';
import * as actions from '../actions/weatherActions';
import { cityProp, weatherProp } from '../types';
import CityHeader from './CityHeader';
export const SideBar = (props) => {
  const {
    actions,
    loading,
    weatherData,
    error,
    errorData,
    dayWiseWeather,
    ui,
    uiActions,
  } = props;
  const [city, setCity] = useState('hosur');
  const [debouncedCity] = useDebounce(city, 300);
  useEffect(() => {
    actions.fetchWeather(debouncedCity);
  }, [debouncedCity]);

  const { city: cityData, lastUpdatedAt } = weatherData;

  return (
    <div className="sidebar">
      <input
        className="bp3-input"
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search City"
      />

      {loading ? <Spinner size={Icon.SIZE_STANDARD} /> : null}
      {error ? (
        <Callout intent="danger" icon={null}>
          {upperFirst(errorData.message)}
        </Callout>
      ) : null}
      <CityHeader
        city={cityData}
        refresh={actions.fetchWeather}
        lastUpdatedAt={lastUpdatedAt}
      />
      <ButtonGroup fill id="unit-selector">
        <Button
          onClick={() => uiActions.setUnits('metric')}
          active={ui.units === 'metric'}
        >
          Metric
        </Button>
        <Button
          onClick={() => uiActions.setUnits('imperial')}
          active={ui.units === 'imperial'}
        >
          Imperial
        </Button>
      </ButtonGroup>
      <ButtonGroup id="date-selection" vertical={true} fill>
        {keys(dayWiseWeather).map((day, index) => {
          const isActive =
            (index === 0 && ui.date === '') || day === ui.date ? true : false;
          return (
            <Button
              key={index}
              active={isActive}
              onClick={() => {
                uiActions.setDate(day);
              }}
            >
              {day}
            </Button>
          );
        })}
      </ButtonGroup>
    </div>
  );
};

SideBar.propTypes = {
  actions: PropTypes.shape({
    fetchWeather: PropTypes.func.isRequired,
  }).isRequired,
  uiActions: PropTypes.shape({
    setUnits: PropTypes.func.isRequired,
    setDate: PropTypes.func.isRequired,
  }).isRequired,
  weatherData: PropTypes.shape({
    city: cityProp,
    list: PropTypes.arrayOf(weatherProp).isRequired,
    lastUpdatedAt: PropTypes.number.isRequired,
  }).isRequired,
  dayWiseWeather: PropTypes.objectOf(PropTypes.arrayOf(weatherProp)).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorData: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
  ui: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    weatherData: state.weather.weatherData,
    dayWiseWeather: state.weather.dayWiseWeather,
    loading: state.weather.loading,
    ui: state.ui,
    error: state.weather.error,
    errorData: state.weather.errorData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    uiActions: bindActionCreators(uiActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
