import React from 'react'

import RadioButton from './RadioButton';
import { useArgs } from '@storybook/client-api';
import { withDesign } from 'storybook-addon-designs'

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
    argTypes: {
      isDisabled: {
        options: [true, false],
        control: {type: 'radio'},
        default: false,
      },
    },
    parameters : {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/BoG-Design-System-(Working-File)?node-id=840%3A4858"
      },
    }
};

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
    <RadioButton {...args[0]} />
    <RadioButton {...args[1]} />
  </form>
)};

export const Primary = Template.bind();
Primary.args = [{
  id: 0,
  groupName:"radioGroup",
  value:"button1",
  label:"Label 1",
  isDisabled:false,
}, {
  id: 1,
  groupName:"radioGroup",
  value:"button2",
  label:"Label 2",
  isDisabled:false,
}]