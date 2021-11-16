import React from 'react';

import { Checkbox } from './components/Checkbox';

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
        }
     
};

const Template = (args) => <Checkbox{...args} />;

export const Primary = Template.bind({});
Primary.args = {};