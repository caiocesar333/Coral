import { Meta, StoryObj} from "@storybook/react"
import { Banner, BannerProps } from "./Banner";

export default {
    title: 'Components/Banner & Hero/Banner',
    component: Banner,
    args: {
        delay: "We are currently experiencing local customs clearance delays. For the latest updates, please check your order status" 
    },
} as Meta<BannerProps>


export const Default: StoryObj<BannerProps> = {
    args:{
        delay:"We are currently experiencing local customs clearance delays. For the latest updates, please check your order status"
    }
}