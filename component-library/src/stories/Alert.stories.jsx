import React from 'react';

import Alert from './components/Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    type: {
      options: ['success', 'failure', 'message', 'brand message'],
      control: {type: 'radio'},
    },
    backgroundColor: { control: 'color' },
    size: {
      options: ['large', 'regular'],
      control: {type: 'radio'},
    },
    onClick: { action: 'clicked' }
  },
  parameters : {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/BoG-Component-Library-(Design-System)-%2F-Fall21?node-id=909%3A16607"
    },
  }
};

const Template = (args) => <Alert {...args} />;

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  type: 'success',
  iconColor: '#13B461',
  backgroundColor: '#E3FCEF',
  borderColor: '',
  size: 'regular',
  hasButton: false,
  buttonLabel: 'Button',
  hasHeader: false,
  headerLabel: "I'M A SUCCESS!",
  alertText: 'This is a description of something that has happened + what you can do.',
};

export const FailureAlert = Template.bind({});
FailureAlert.args = {
  type: 'failure',
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
  type: 'message',
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
  type: 'brand message',
  iconColor: '#473F91',
  backgroundColor: '#EAE6FF',
  size: 'regular',
  hasButton: false,
  buttonLabel: 'Button',
  hasHeader: false,
  headerLabel: "WE BOG HERE ",
  alertText: 'This is a description of something that has happened + what you can do.',
};
