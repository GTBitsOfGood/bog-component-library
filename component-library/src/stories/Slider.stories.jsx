import { Slider } from "../components/Slider/Slider";


export default {
    title: "Components/Slider",
    component: Slider,
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/OG-BoG-Design-System-(Working-File)?node-id=2228%3A22549"
        },
    }
}

const Template = (args) => <Slider {...args} />

export const Primary = Template.bind({});
Primary.args = {
    min: 0,
    max: 255,
    startingValue: 100,
    width: 100
}