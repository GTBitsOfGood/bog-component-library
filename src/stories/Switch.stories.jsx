import React from 'react';

import { Switch } from './components/Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Switch',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
};

