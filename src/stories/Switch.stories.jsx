import React from 'react';

import { Switch } from './components/Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const Unlabeled = Template.bind({});
Unlabeled.args = {
  hasLabel: false,
  label: 'Switch',
};

export const Labeled = Template.bind({});
Labeled.args = {
  hasLabel: true,
};

