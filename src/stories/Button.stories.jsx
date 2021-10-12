import React from 'react';

import { Button } from './components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
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
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  label: 'Button',
};