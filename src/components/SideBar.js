import { Button, ButtonGroup, Callout, Icon, Spinner } from '@blueprintjs/core';
import { debounce, keys, upperFirst } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from '../actions/uiActions';
import * as actions from '../actions/weatherActions';
import CityHeader from './CityHeader';
import { cityProp, weatherProp } from '../types';
const SideBar = (props) => {
  const {
    actions,
    loading,
    weatherData,
    error,
    dayWiseWeather,
    ui,
    uiActions,
  } = props;
  const [city, setCity] = useState('hosur');
  const debouncedFetch = debounce((city) => {
    actions.fetchWeather(city);
  }, 100);
  useEffect(() => {
    debouncedFetch(city);
  }, [actions, ui.units, city]);

  const { city: cityData, lastUpdatedAt } = weatherData;

  return (
    <div className="sidebar">
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        className="bp3-input"
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search City"
      />
      {loading ? <Spinner size={Icon.SIZE_STANDARD} /> : null}
      {error ? (
        <Callout intent="danger" icon={null}>
          {upperFirst(error.message)}
        </Callout>
      ) : null}
      <CityHeader
        city={cityData}
        refresh={actions.fetchWeather}
        lastUpdatedAt={lastUpdatedAt}
      />
      <ButtonGroup outline fill>
        <Button
          onClick={() => uiActions.setUnit('metric')}
          active={ui.units === 'metric'}
        >
          Metric
        </Button>
        <Button
          onClick={() => uiActions.setUnit('imperial')}
          active={ui.units === 'imperial'}
        >
          Imperial
        </Button>
      </ButtonGroup>
      <ButtonGroup
        className="date-selection"
        outline={true}
        vertical={true}
        fill
      >
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
    setUnit: PropTypes.func.isRequired,
    setDate: PropTypes.func.isRequired,
  }).isRequired,
  weatherData: PropTypes.shape({
    city: cityProp,
    list: PropTypes.arrayOf(weatherProp).isRequired,
    lastUpdatedAt: PropTypes.number.isRequired,
  }).isRequired,
  dayWiseWeather: PropTypes.objectOf(PropTypes.arrayOf(weatherProp)).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    weatherData: state.weather.weatherData,
    dayWiseWeather: state.weather.dayWiseWeather,
    loading: state.weather.loading,
    ui: state.ui,
    error: state.weather.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    uiActions: bindActionCreators(uiActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
