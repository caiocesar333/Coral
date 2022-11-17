import { Meta, StoryObj} from "@storybook/react"
import { Profile, ProfileProps } from "./Profile";

export default {
    title: 'Components/Icons/Profile',
    component: Profile,
    args: {
        children: "Profile"
    },
} as Meta<ProfileProps>


export const Primary: StoryObj<ProfileProps> = {
    args:{
        children: "Profile"
    }
}