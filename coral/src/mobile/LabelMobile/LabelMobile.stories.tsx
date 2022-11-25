import { Meta, StoryObj} from "@storybook/react"
import { LabelMobile, LabelMobileProps } from "./LabelMobile";

export default {
    title: "Mobile Components/LabelMobile",
    component: LabelMobile,
    args: {
        title: "string",
        viewAll: true,
    },
} as Meta<LabelMobileProps>


export const Default: StoryObj<LabelMobileProps> = {
    args:{
        title: "Section",
        viewAll: true,
    }
}
export const WithoutViewAll: StoryObj<LabelMobileProps> = {
    args:{
        title: "Section",
        viewAll: false,
    }
}