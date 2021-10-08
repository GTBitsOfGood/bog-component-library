import React from 'react';

import { WeatherCard } from './components/WeatherCard';

export default {
  title: 'Components/WeatherCard',
  component: WeatherCard,
};

const Template = (args) => <WeatherCard {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  temperatureMeasure: "F"
}
