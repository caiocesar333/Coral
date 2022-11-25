import { Meta, StoryObj} from "@storybook/react"
import { BagWhite, BagWhiteProps } from "./BagWhite";

export default {
    title: 'Components/Icons/BagWhite',
    component: BagWhite,
    args: {
        children: "BagWhite"
    },
} as Meta<BagWhiteProps>


export const Primary: StoryObj<BagWhiteProps> = {
    args:{
        children: "BagWhite"
    }
}