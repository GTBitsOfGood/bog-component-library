import React from 'react';

import Dropdown from '../components/Dropdown/Dropdown';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    variant: {
      options: ['regular', 'radio', 'checkbox'],
      control: {type: 'select'},
    },
    isDisabled: {
      options: [true, false],
      control: {type: 'radio'},
    },
    error: {
        options: [true, false],
        control: {type: 'radio'},
    }
  },
  parameters : {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/BoG-Component-Library-(Design-System)-%2F-Fall21?node-id=1042%3A13616"
    },
  }
};

const Template = (args) => <Dropdown {...args} />;

export const RegularDropdown = Template.bind({});
RegularDropdown.args = {
  variant: "regular",
  label: 'Dropdown',
};

export const RadioDropdown = Template.bind({});
RadioDropdown.args = {
  variant: "radio",
  label: 'Dropdown',
};

export const CheckboxDropdown = Template.bind({});
CheckboxDropdown.args = {
  variant: "checkbox",
  label: 'Dropdown',
};