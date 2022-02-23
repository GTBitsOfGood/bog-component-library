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
  // const [_, updateArgs] = useArgs(args);

  // const handle = (event) => {
  //   let buttons = args.buttons;
  //   for (let i = 0; i < buttons.length; i++){
  //     let btn = JSON.parse(JSON.stringify(buttons[i])); //deep copy of button object
  //     if (i === event.target.id) {
  //       if (buttons[i].isDisabled) {
  //         return
  //       } else {
  //         btn.isChecked = true
  //       }
  //     } else {
  //       btn.isChecked = false
  //     }
  //     buttons[i] = btn
  //   }

  //   args.buttons = buttons;
  //   updateArgs(args);
  // };

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