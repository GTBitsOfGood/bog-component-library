import React from 'react';

import { Tooltip } from './components/Tooltip';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/Tooltip',
  decorators: [withDesign],
  component: Tooltip,
  argTypes: {
    size: {
      options: ["large", "small"],
      control: {type: 'radio'},
      default: "large",
    },
    style: {
      options: ["dark", "light", "brand", "capitalized"],
      control: {type: 'radio'},
      default: "dark",
    },
    arrowDirection: {
      options: ["bottom", "right", "top", "left"],
      control: {type: 'radio'},
      default: "bottom",
    },
    arrowPosition: {
      options: ["1", "2", "3"],
      control: {type: 'radio'},
      default: "2",
    },
  },
  parameters : {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/BoG-Design-System-(Working-File)?node-id=2%3A3"
    },
  }
};

const Template = (args) => <Tooltip {...args} />

export const Large = Template.bind({});
Large.args = {
  text: "tooltip",
  size: "large",
  style: "dark",
  arrowDirection: "bottom",
  arrowPosition: "2",
};

export const Small = Template.bind({});
Small.args = {
  text: "tooltip",
  size: "small",
  style: "dark",
  arrowDirection: "bottom",
  arrowPosition: "2",
};