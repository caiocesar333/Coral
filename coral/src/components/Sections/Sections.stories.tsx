import { Meta, StoryObj} from "@storybook/react"
import { Sections, SectionsProps } from "./Sections";
import personal from "../../assets/handpicked/personal.png"
import handbag from "../../assets/handpicked/handbag.png"
import watches from "../../assets/handpicked/watches.png"
import glasses from "../../assets/handpicked/glasses.png"

export default {
    title: "Components/Sections",
    component: Sections,
    args: {
        image: "",
        title: "Personal Care",
    },
} as Meta<SectionsProps>

export const Personal: StoryObj<SectionsProps> = {
    args: {
        image: personal,
        title: "Personal Care",
    },
}

export const Handbags: StoryObj<SectionsProps> = {
    args: {
        image: handbag,
        title: "Handbags",
    },
}

export const Watches: StoryObj<SectionsProps> = {
    args: {
        image: watches,
        title: "Wrist Watches",
    },
}

export const Glasses: StoryObj<SectionsProps> = {
    args: {
        image: glasses,
        title: "Sun Glasses",
    },
}