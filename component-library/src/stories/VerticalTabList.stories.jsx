import { default as VerticalTabList } from '../components/VerticalTabList';
import { default as Tab } from '../components/VerticalTabList/Tab';
import { withDesign } from 'storybook-addon-designs'

export default {
    title: 'Components/VerticalTabList',
    decorators: [withDesign],
    component: VerticalTabList,
    argTypes: {
      variant: {
        options: ['lineTabs', 'filledTabs'],
        control: {type: 'select'},
      },
      children: {
        description: "Click on 'Show code' for more details."
      }
    },
    parameters : {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/BoG-Component-Library-(Design-System)-%2F-Fall21?node-id=701%3A1701"
      },
    }
}

const Template = (args) =>
<VerticalTabList {...args}>
    <Tab {...args}>Tab1</Tab>
    <Tab {...args}>Tab2</Tab>
    <Tab {...args}>Tab3</Tab>
</VerticalTabList>

export const LineTabs = Template.bind({
  variant: "lineTabs"
});

export const FilledTabs = Template.bind({
  variant: "filledTabs"
});