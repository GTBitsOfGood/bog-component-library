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
    }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: 'Button',
  // icon: '../assets/downArrow.svg',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: 'Button',
  // icon: '../assets/downArrow.svg',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  label: 'Button',
  // icon: '../assets/downArrow.svg',
};