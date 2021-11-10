import React from 'react';

import { Dropdown } from './components/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    variant: {
      options: ['regular', 'radio', 'checkbox'],
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

const Template = (args) => <Dropdown {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  variant: "regular",
  label: 'Dropdown',
};