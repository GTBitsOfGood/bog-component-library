import React from 'react';

import Switch from './Switch';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/Switch',
  component: Switch,
  parameters : {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/BoG-Design-System-(Working-File)?node-id=701%3A2309"
    },
  }
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

