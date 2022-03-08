import React from 'react';
import { Avatar } from '../components/Avatar';
import { withDesign } from 'storybook-addon-designs'

export default {
    title: 'Components/Avatar',
    decorators: [withDesign],
    component: Avatar,
    argTypes: {
      size: {
        options: ["large", "small"],
        default: "large",
      },
    },
    parameters : {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/OG-BoG-Design-System-(Working-File)?node-id=2228%3A11952"
      },
    }
};

const Template = (args) => <Avatar {...args} />

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Avatar"
};
