import { Meta, StoryObj} from "@storybook/react"
import { Favorite, FavoriteProps } from "./Favorite";

export default {
    title: 'Components/Icons/Favorite',
    component: Favorite,
    args: {
        children: "Favorite"
    },
} as Meta<FavoriteProps>


export const Primary: StoryObj<FavoriteProps> = {
    args:{
        children: "Favorite"
    }
}