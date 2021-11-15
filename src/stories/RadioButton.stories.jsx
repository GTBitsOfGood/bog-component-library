import React from 'react'

import { RadioButton } from './components/RadioButton';
import { useArgs } from '@storybook/client-api';

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
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  

  const handle = (event) => {
    args[event.target.id].isChecked = true
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