import React from 'react';

import Checkbox from '../components/Checkbox/Checkbox';
import { withDesign } from 'storybook-addon-designs'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    argTypes: {
        label: {
            type: { 
              summary: 'string', 
              detail: 'checkbox label' 
            }
          },
        },
    parameters : {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/BoG-Design-System-(Working-File)?node-id=840%3A4858"
      },
    }
};

const Template = (args) => <Checkbox{...args} />;

export const Primary = Template.bind({});
Primary.args = {};