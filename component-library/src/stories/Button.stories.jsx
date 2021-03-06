import { default as Button } from '../components/Button';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/Button',
  decorators: [withDesign],
  component: Button,
  argTypes: {
    type: {
      options: ['large', 'medium', 'small'],
      control: {type: 'select'},
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {type: 'select'},
    },
    disabled: {
      control: {type: 'boolean'},
    },
    children: {
      control: {type: 'text'}
    },
    onClick: { action: 'clicked' }
  },
  parameters : {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/BoG-Component-Library-(Design-System)-%2F-Fall21?node-id=701%3A1701"
    },
  }
};

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Button"
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Button"
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  children: "Button"
};