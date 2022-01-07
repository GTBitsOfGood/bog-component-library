import React from 'react';

import Button from './components/Button';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/Button',
  decorators: [withDesign],
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      options: ['large', 'medium', 'small'],
      control: {type: 'select'},
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {type: 'select'},
    },
    iconPosition: {
      options: ['left', 'right'],
      control: {type: 'radio'},
    },
    isDisabled: {
      control: {type: 'boolean'},
    },
    onClick: { action: 'clicked' }
  },
  parameters : {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/BoG-Component-Library-(Design-System)-%2F-Fall21?node-id=701%3A1701"
    },
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  icon: 'https://img.icons8.com/material-outlined/24/282c34/search--v1.png',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  icon: 'https://img.icons8.com/material-outlined/24/282c34/search--v1.png',
};