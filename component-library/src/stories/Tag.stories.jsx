import { default as Tag } from '../components/Tag';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/Tag',
  decorators: [withDesign],
  component: Tag,
  argTypes: {
    type: {
      options: ['large', 'medium', 'small'],
      control: {type: 'select'},
    },
    variant: {
      options: ['info', 'danger', 'success', 'warning', 'archived'],
      control: {type: 'select'},
    },
    children: {
      control: {type: 'text'}
    },
  },
  parameters : {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/OG-BoG-Design-System-(Working-File)?node-id=2118%3A11977"
    },
  }
};

const Template = (args) => <Tag {...args} />

export const Info = Template.bind({});
Info.args = {
  variant: "info",
  type: "medium",
  children: "Info"
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  type: "medium",
  children: "Danger"
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  type: "medium",
  children: "Success"
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  type: "medium",
  children: "Warning"
};

export const Archived = Template.bind({});
Archived.args = {
  variant: "archived",
  type: "medium",
  children: "Archived"
};