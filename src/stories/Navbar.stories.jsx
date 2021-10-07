import React from 'react';

import { Navbar } from './components/Navbar';

export default {
    title: 'Components/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
        menuItems: { control: {type: "object"} },
      },
};

const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};