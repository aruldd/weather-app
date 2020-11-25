import React from 'react';
import { shallow, mount } from 'enzyme';
import CityHeader from './CityHeader';

describe('<CityHeader />', () => {
  it('Should display city name and country code', () => {
    const city = {
      name: 'Chennai',
      country: 'IN',
      sunrise: 1606264962,
      sunset: 1606306171,
    };
    const refresh = jest.fn();
    const lastUpdatedAt = 1606300611;

    const wrapper = shallow(
      <CityHeader city={city} refresh={refresh} lastUpdatedAt={lastUpdatedAt} />
    );
    const cityNameText = wrapper.find('.city-name span').text();
    expect(cityNameText).toEqual('Chennai, IN ');
  });

  it('Should display last updated at', () => {
    const city = {
      name: 'Chennai',
      country: 'IN',
      sunrise: 1606264962,
      sunset: 1606306171,
    };
    const refresh = jest.fn();
    const lastUpdatedAt = 1606300611;

    const wrapper = shallow(
      <CityHeader city={city} refresh={refresh} lastUpdatedAt={lastUpdatedAt} />
    );
    const lastUpdatedText = wrapper.find('.bp3-text-muted').text();
    expect(lastUpdatedText).toEqual('Last updated at 4:06 PM');
  });

  it('Should display sunrise and sunset', () => {
    const city = {
      name: 'Chennai',
      country: 'IN',
      sunrise: 1606264962,
      sunset: 1606306171,
    };
    const refresh = jest.fn();
    const lastUpdatedAt = 1606300611;

    const wrapper = shallow(
      <CityHeader city={city} refresh={refresh} lastUpdatedAt={lastUpdatedAt} />
    );
    const metaText = wrapper.find('.city-meta').text();
    expect(metaText).toEqual('Sunrise: 6:12 AM | Sunset: 5:39 PM ');
  });

  it('Should call refresh fn when clicking refresh', () => {
    const city = {
      name: 'Chennai',
      country: 'IN',
      sunrise: 1606264962,
      sunset: 1606306171,
    };
    const refresh = jest.fn();
    const lastUpdatedAt = 1606300611;

    const wrapper = mount(
      <CityHeader city={city} refresh={refresh} lastUpdatedAt={lastUpdatedAt} />
    );
    expect(refresh).not.toBeCalled();
    wrapper.find('button').last().simulate('click');
    expect(refresh).toBeCalled();
  });
});
