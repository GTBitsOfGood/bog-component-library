import React from 'react'

import RadioGroup from '../components/RadioButton/RadioGroup/RadioGroup';
import { useArgs } from '@storybook/client-api';
import { withDesign } from 'storybook-addon-designs'

export default {
    title: 'Components/RadioGroup',
    component: RadioGroup,
    parameters : {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/BoG-Design-System-(Working-File)?node-id=840%3A4858"
      },
    }
};

const defaultBtns = [
  {
    value: "radio1",
    label: "Radio button 1",
    isDisabled: false,
    isChecked: false
  },
  {
    value: "radio2",
    label: "Radio button 2",
    isDisabled: false,
    isChecked: false
  },
]

const Template = (args) => {
  return (
  <form>
    <RadioGroup { ...args}/>
  </form>
)};

export const Primary = Template.bind();
Primary.args = {
  groupName: "radioGroup",
  buttons: defaultBtns,
  defaultSelection: -1,
}