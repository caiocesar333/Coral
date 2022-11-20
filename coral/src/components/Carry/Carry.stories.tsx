import { Meta, StoryObj} from "@storybook/react"
import { Carry, CarryProps } from "./Carry";

export default {
    title: 'Components/Carry',
    component: Carry,
    args: {
        children: "string",
        title: "Carry your funk",
        description: "Trendy handbags collection for your party animal",
        carry:{}
    },
} as Meta<CarryProps>


export const Default: StoryObj<CarryProps> = {
    args:{
        children: "string",
        title: "Carry your funk",
        description: "Trendy handbags collection for your party animal",
        carry:true
    }
}