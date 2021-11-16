import React from 'react'

import { RadioButton } from './components/RadioButton';

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

const Template = (args) => (
  <div>
    <RadioButton {...args[0]} />
    <RadioButton {...args[1]} />
  </div>
);

export const Primary = Template.bind();
Primary.args = [{
  groupName:"radioGroup",
  value:"button1",
  label:"Label 1",
  isDisabled:false
}, {
  groupName:"radioGroup",
  value:"button2",
  label:"Label 2",
  isDisabled:false
}]