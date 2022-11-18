import { Meta, StoryObj } from "@storybook/react"
import { Hero, HeroProps } from "./Hero";

export default {
    title: "Components/Banner & Hero/Hero",
    component: Hero,
    args: {
        title: "Carry your Funk",
        description: "Trendy handbags collection for your party animal",
    },
} as Meta<HeroProps>


export const Default: StoryObj<HeroProps> = {
    args: {
        title: "Carry your Funk",
        description: "Trendy handbags collection for your party animal"
    }
}