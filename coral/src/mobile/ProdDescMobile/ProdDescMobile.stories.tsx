import { Meta, StoryObj } from "@storybook/react"
import { ProdDescMobile, ProdDescMobileProps } from "./ProdDescMobile";

export default {
    title: "Mobile Components/ProdDescMobile",
    component: ProdDescMobile,
    args: {
        title: "string",
        arrow: false
    },
} as Meta<ProdDescMobileProps>


export const Default: StoryObj<ProdDescMobileProps> = {
    args: {
        title: "Label",
        arrow: true
    }
}