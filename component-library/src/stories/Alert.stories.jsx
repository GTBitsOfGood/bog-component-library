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
    borderColor: { control: 'color' },
    headerColor: { control: 'color' },
    textColor: { control: 'color' },
    buttonColor: { control: 'color' },
    iconColor: { control: 'color' },
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
  width: 300,
  alertText: 'This is a description of something that has happened + what you can do.',
  buttonLabel: 'Button',
  headerLabel: "I'M A SUCCESS!",
  backgroundColor: '#13B461',
  borderColor: '',
  headerColor: '#FFFFFF',
  textColor: '#FFFFFF',
  buttonColor: '#FFFFFF',
  iconColor: '#FFFFFF',
  hasIcon: true,
  hasButton: false,
  hasHeader: false,
};

export const FailureAlert = Template.bind({});
FailureAlert.args = {
  type: 'failure',
  width: 300,
  alertText: 'This is a description of something that has happened + what you can do.',
  buttonLabel: 'Button',
  headerLabel: "ERROR NO FILE FOUND",
  backgroundColor: '#C63636',
  borderColor: '',
  headerColor: '#FFFFFF',
  textColor: '#FFFFFF',
  buttonColor: '#FFFFFF',
  iconColor: '#FFFFFF',
  hasIcon: true,
  hasButton: false,
  hasHeader: false,
};

export const MessageAlert = Template.bind({});
MessageAlert.args = {
  type: 'message',
  width: 300,
  alertText: 'This is a description of something that has happened + what you can do.',
  buttonLabel: 'Button',
  headerLabel: "HEY THERE",
  backgroundColor: '#005EEF',
  borderColor: '',
  headerColor: '#FFFFFF',
  textColor: '#FFFFFF',
  buttonColor: '#FFFFFF',
  iconColor: '#FFFFFF',
  hasIcon: true,
  hasButton: false,
  hasHeader: false,
};

export const BrandMessageAlert = Template.bind({});
BrandMessageAlert.args = {
  type: 'brand message',
  width: 300,
  alertText: 'This is a description of something that has happened + what you can do.',
  buttonLabel: 'Button',
  headerLabel: "WE BOG HERE",
  backgroundColor: '#36306E',
  borderColor: '',
  headerColor: '#FFFFFF',
  textColor: '#FFFFFF',
  buttonColor: '#FFFFFF',
  iconColor: '#FFFFFF',
  hasIcon: true,
  hasButton: false,
  hasHeader: false,
};
