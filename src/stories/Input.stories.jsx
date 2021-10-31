import React from 'react';

import { Input } from './components/Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    variant: {
      options: ['regular', 'leftIcon', 'rightIcon', 'doubleIcon', 'textArea'],
      control: {type: 'radio'},
    },
    isDisabled: {
      options: [true, false],
      control: {type: 'radio'},
    },
    error: {
        options: [true, false],
        control: {type: 'radio'},
    },
    success: {
        options: [true, false],
        control: {type: 'radio'},
      }
  },
};

const Template = (args) => <Input {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  variant: "regular",
  label: 'Input',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  variant: "leftIcon",
  label: 'Input',
  leftIcon: 'https://img.icons8.com/ios/50/000000/search--v1.png',
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  variant: "rightIcon",
  label: 'Input',
  rightIcon: 'https://img.icons8.com/material-rounded/24/000000/chevron-down.png',
};

export const DoubleIcon = Template.bind({});
DoubleIcon.args = {
  variant: "doubleIcon",
  label: 'Input',
  leftIcon: 'https://img.icons8.com/material-outlined/24/000000/planner.png',
  rightIcon: 'https://img.icons8.com/material-rounded/24/000000/chevron-down.png',
};

export const TextArea = Template.bind({});
TextArea.args = {
  variant: "textArea",
  label: 'Input',
  rows: 3,
  cols: 10,
};