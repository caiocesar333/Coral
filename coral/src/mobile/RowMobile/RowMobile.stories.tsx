import { Meta, StoryObj } from "@storybook/react"
import { RowMobile, RowMobileProps } from "./RowMobile";

export default {
    title: "Mobile Components/RowListMobile/RowMobile",
    component: RowMobile,
    args: {
        name: "name",
        description: "description",
        price: "price",
        category: true
    },
} as Meta<RowMobileProps>


export const Default: StoryObj<RowMobileProps> = {
    args: {
        name: "name",
        description: "description",
        price: "price",
        category: true
    }
}