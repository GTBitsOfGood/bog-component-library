import React from 'react';

import { Button } from './components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {type: 'radio'},
    },
    iconPosition: {
      options: ['left', 'right'],
      control: {type: 'radio'},
    },
    isDisabled: {
      options: [true, false],
      control: {type: 'radio'},
    }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: 'Button',
  icon: 'https://img.icons8.com/material-outlined/24/282c34/search--v1.png',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  label: 'Button',
  icon: 'https://img.icons8.com/material-outlined/24/282c34/search--v1.png',
};