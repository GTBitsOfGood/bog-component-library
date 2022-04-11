import React from 'react';

import Alert from '../components/Alert/Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    type: {
      options: ['success', 'error', 'message', 'brand'],
      control: {type: 'radio'},
    },
    invertedColors: {control:'boolean'},
    hasIcon: {control:'boolean'},
    hasButton: {control:'boolean'},
    hasHeader: {control:'boolean'},
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
  invertedColors: false,
  width: 300,
  alertText: 'This is a description of something that has happened + what you can do.',
  buttonLabel: 'Button',
  headerLabel: "I'M A SUCCESS!",
  hasIcon: true,
  hasButton: false,
  hasHeader: false,
};

export const FailureAlert = Template.bind({});
FailureAlert.args = {
  type: 'error',
  invertedColors: false,
  width: 300,
  alertText: 'This is a description of something that has happened + what you can do.',
  buttonLabel: 'Button',
  headerLabel: "ERROR NO FILE FOUND",
  hasIcon: true,
  hasButton: false,
  hasHeader: false,
};

export const MessageAlert = Template.bind({});
MessageAlert.args = {
  type: 'message',
  invertedColors: false,
  width: 300,
  alertText: 'This is a description of something that has happened + what you can do.',
  buttonLabel: 'Button',
  headerLabel: "HEY THERE",
  hasIcon: true,
  hasButton: false,
  hasHeader: false,
};

export const BrandMessageAlert = Template.bind({});
BrandMessageAlert.args = {
  type: 'brand',
  invertedColors: false,
  width: 300,
  alertText: 'This is a description of something that has happened + what you can do.',
  buttonLabel: 'Button',
  headerLabel: "WE BOG HERE",
  hasIcon: true,
  hasButton: false,
  hasHeader: false,
};
