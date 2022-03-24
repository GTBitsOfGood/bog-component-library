import { default as ScrollingTableOfContents } from '../components/ScrollingTableOfContents';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/ScrollingTableOfContents',
  decorators: [withDesign],
  component: ScrollingTableOfContents,
  parameters : {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/OG-BoG-Design-System-(Working-File)?node-id=2982%3A19944"
    },
  }
};

const Template = (args) => <ScrollingTableOfContents {...args} />

export const Primary = Template.bind({});