import { Button } from '@blueprintjs/core';
import PropTypes from 'prop-types';

import React from 'react';
import { getFormattedDateFromTS } from '../utils/dates';
import { cityProp } from '../types';
const CityHeader = (props) => {
  const { city, refresh, lastUpdatedAt } = props;
  if (!(city && refresh && lastUpdatedAt)) {
    return null;
  }
  const { name, sunrise, sunset, country } = city;
  return (
    <div className="city-header">
      <h2 className="city-name">
        <span>
          {name}, {country}{' '}
        </span>
        <Button minimal icon="refresh" onClick={() => refresh(name)} />
      </h2>
      <div className="city-meta">
        Sunrise: {getFormattedDateFromTS(sunrise, 'LT')} | Sunset:{' '}
        {getFormattedDateFromTS(sunset, 'LT')}{' '}
      </div>
      <div className="bp3-text-muted">
        Last updated at {getFormattedDateFromTS(lastUpdatedAt, 'LT')}
      </div>
    </div>
  );
};

CityHeader.propTypes = {
  city: cityProp,
  refresh: PropTypes.func.isRequired,
  lastUpdatedAt: PropTypes.number.isRequired,
};

export default CityHeader;
