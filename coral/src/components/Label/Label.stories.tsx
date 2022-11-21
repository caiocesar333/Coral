import { Meta, StoryObj} from "@storybook/react"
import { Label, LabelProps } from "./Label";

export default {
    title: 'Components/ProductPage/Label',
    component: Label,
    args: {
        productName: "handbags"
    },
} as Meta<LabelProps>


export const Default: StoryObj<LabelProps> = {
    args:{
        productName: "handbags"
    }
}