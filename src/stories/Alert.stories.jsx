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
  backgroundColor: 'rgba(205, 242, 214, 1)',
  alertText: 'Nice, you triggered this alert message!',
  url: 'https://youtu.be/dQw4w9WgXcQ'
};


