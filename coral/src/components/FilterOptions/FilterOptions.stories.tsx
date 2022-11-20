import { Meta, StoryObj} from "@storybook/react"
import { FilterOptions, FilterOptionsProps } from "./FilterOptions";

export default {
    title: 'Components/Filter/FilterOptions',
    component: FilterOptions,
    args: {
        filter:""
    },
} as Meta<FilterOptionsProps>


export const Size: StoryObj<FilterOptionsProps> = {
    args:{
        filter:"Size"
    }
}

export const Color: StoryObj<FilterOptionsProps> = {
    args:{
        filter:"Color"
    }
}

export const Brand: StoryObj<FilterOptionsProps> = {
    args:{
        filter:"Brand"
    }
}

export const PriceRange: StoryObj<FilterOptionsProps> = {
    args:{
        filter:"Price Range"
    }
}
export const Discount: StoryObj<FilterOptionsProps> = {
    args:{
        filter:"Discount"
    }
}
export const Availability: StoryObj<FilterOptionsProps> = {
    args:{
        filter:"Availability"
    }
}