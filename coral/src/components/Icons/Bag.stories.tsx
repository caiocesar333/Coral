import { Meta, StoryObj} from "@storybook/react"
import { Bag, BagProps } from "./Bag";

export default {
    title: 'Components/Icons/Bags',
    component: Bag,
    args: {
        children: "Bag"
    },
} as Meta<BagProps>


export const Primary: StoryObj<BagProps> = {
    args:{
        children: "Bag"
    }
}