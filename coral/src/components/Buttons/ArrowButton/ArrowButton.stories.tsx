import { Meta, StoryObj } from "@storybook/react"
import { ArrowButton, ArrowButtonProps } from "./ArrowButton";


export default {
    title: "Components/SkinFace/ArrowButton",
    component: ArrowButton,
    args: {
        children: "",
        color: "white",
        bg: "white",
        filter: "white"
    },
} as Meta<ArrowButtonProps>


export const Skin: StoryObj<ArrowButtonProps> = {
    args: {
        children: "",
        color:"#A53F64",
        bg: "white",
        filter: ""
    }
}

export const Face: StoryObj<ArrowButtonProps> = {
    args: {
        children: "",
        color:"#1B4B66",
        bg: "#c2cbd1",
        filter: "invert(19%) sepia(25%) saturate(307%) hue-rotate(230deg) brightness(50%) contrast(88%);"
    }
}