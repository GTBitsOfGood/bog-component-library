import { default as ScrollNavigation } from '../components/ScrollNavigation';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/ScrollNavigation',
  decorators: [withDesign],
  component: ScrollNavigation,
  argTypes: {
    side: {
      options: ['left', 'right'],
      control: {type: 'select'},
    },
  },
  parameters : {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/OG-BoG-Design-System-(Working-File)?node-id=2982%3A19944"
    },
  }
};

const Template = (args) => <ScrollNavigation {...args} />

export const RegularScrollNavigation = Template.bind({});
RegularScrollNavigation.args = {
  side: "left"
}
