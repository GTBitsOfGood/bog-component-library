import React from 'react'

import { RadioButton } from './components/RadioButton';

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
    argTypes: {
      isDisabled: {
        options: [true, false],
        control: {type: 'radio'},
      }
    },
};

const Template = (args) => <RadioButton {...args} />;

export const Primary = Template.bind({});