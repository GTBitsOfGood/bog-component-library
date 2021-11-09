import React from 'react';

import { Alert } from './components/Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    iconType: {
      options: ['success', 'failure', 'message', 'brand message'],
      control: {type: 'radio'},
    },
    backgroundColor: { control: 'color' },
    size: {
      options: ['large', 'regular'],
      control: {type: 'radio'},
    }
  },
};

const Template = (args) => <Alert {...args} />;

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  iconType: 'success',
  iconColor: '#13B461',
  backgroundColor: '#E3FCEF',
  size: 'regular',
  hasButton: false,
  buttonLabel: 'Button',
  hasHeader: false,
  headerLabel: "I'M A SUCCESS!",
  alertText: 'This is a description of something that has happened + what you can do.',
};

export const FailureAlert = Template.bind({});
FailureAlert.args = {
  iconType: 'failure',
  iconColor: '#FF3939',
  backgroundColor: '#FFE3E3',
  size: 'regular',
  hasButton: false,
  buttonLabel: 'Button',
  hasHeader: false,
  headerLabel: "ERROR NO FILE FOUND",
  alertText: 'This is a description of something that has happened + what you can do.',
};

export const MessageAlert = Template.bind({});
MessageAlert.args = {
  iconType: 'message',
  iconColor: '#005EEF',
  backgroundColor: '#DEEBFF',
  size: 'regular',
  hasButton: false,
  buttonLabel: 'Button',
  hasHeader: false,
  headerLabel: "HEY THERE",
  alertText: 'This is a description of something that has happened + what you can do.',
};

export const BrandMessageAlert = Template.bind({});
BrandMessageAlert.args = {
  iconType: 'brand message',
  iconColor: '#473F91',
  backgroundColor: '#EAE6FF',
  size: 'regular',
  hasButton: false,
  buttonLabel: 'Button',
  hasHeader: false,
  headerLabel: "WE BOG HERE ",
  alertText: 'This is a description of something that has happened + what you can do.',
};

// export const FailureAlert = Template.bind({});
// FailureAlert.args = {
//   backgroundColor: '#FFE3E3',
//   hasButton: false,
//   buttonLabel: 'Button',
//   alertText: 'Nice, you triggered this alert message!',
//   url: 'https://youtu.be/dQw4w9WgXcQ'
// };

// export const AlertMessage = Template.bind({});
// AlertMessage.args = {
//   backgroundColor: '#DEEBFF',
//   hasButton: false,
//   buttonLabel: 'Button',
//   alertText: 'Nice, you triggered this alert message!',
//   url: 'https://youtu.be/dQw4w9WgXcQ'
// };

// export const AlertBrandMessage = Template.bind({});
// AlertBrandMessage.args = {
//   backgroundColor: '#EAE6FF',
//   hasButton: false,
//   buttonLabel: 'Button',
//   alertText: 'Nice, you triggered this alert message!',
//   url: 'https://youtu.be/dQw4w9WgXcQ'
// };
