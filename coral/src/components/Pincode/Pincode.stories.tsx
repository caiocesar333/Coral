import { Meta, StoryObj} from "@storybook/react"
import { Pincode, PincodeProps } from "./Pincode";

export default {
    title: 'Components/Modal/Pincode',
    component: Pincode,
    args: {
        placeholder:""
    },
} as Meta<PincodeProps>


export const Default: StoryObj<PincodeProps> = {
    args:{
        placeholder: "Coupon Code"
    }
}