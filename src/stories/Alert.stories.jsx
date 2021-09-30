import React from 'react';

import { Alert } from './components/Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "green",
  alertText: 'This is an alert',
  url: 'https://www.google.com'
};


