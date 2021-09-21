import React from 'react';

import { Navbar } from './components/Navbar';

export default {
    title: 'Components/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
        menuItems: {
          control: {type: "array", defaultValue: {menuItems: []}},
          default: [{name: "Tab", link: ""}],
        },
      },
};

const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  menuItems: [{name: 'About Us', link: ''}, {name: 'Projects', link: ''}, {name: 'Blog', link: ''}]
};