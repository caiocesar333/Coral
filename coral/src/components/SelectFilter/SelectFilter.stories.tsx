import { Meta, StoryObj} from "@storybook/react"
import { SelectFilter, SelectFilterProps } from "./SelectFilter";

export default {
    title: 'Components/Filter/SelectFilter',
    component: SelectFilter,
    args: {
        filterName:""
    },
} as Meta<SelectFilterProps>


export const Default: StoryObj<SelectFilterProps> = {
    args:{
        filterName:"Blue"
    }
}