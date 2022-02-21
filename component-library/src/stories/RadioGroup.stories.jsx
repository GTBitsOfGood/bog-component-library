import React from 'react'

import RadioGroup from '../components/RadioGroup/RadioGroup';
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
  const [_, updateArgs] = useArgs();

  const handle = (event) => {
    for (let a = 0; a < args.length; a++){
      if (a !== event.target.id) args[a].isChecked = false
      else args[a].isChecked = true
    }
    updateArgs(args);
  };

  return (
  <form onChange={handle}>
    <RadioGroup groupName="radioGroup" buttons={defaultBtns} />
  </form>
)};

export const Primary = Template.bind();
Primary.args = {
  groupName: "radioGroup",
  buttons: defaultBtns,
}