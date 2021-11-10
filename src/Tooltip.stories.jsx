import React from 'react';

import { Tooltip } from './components/Tooltip';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/Tooltip',
  decorators: [withDesign],
  component: Tooltip,
  argTypes: {
  },
  parameters : {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/BoG-Design-System-(Working-File)?node-id=2%3A3"
    },
  }
};

const Template = (args) => (
  <Tooltip {...args}>
    <div>
      Hover over me!
    </div>
  </Tooltip>
)

export const Large = Template.bind({});
Large.args = {

};

export const Small = Template.bind({});
Small.args = {

};