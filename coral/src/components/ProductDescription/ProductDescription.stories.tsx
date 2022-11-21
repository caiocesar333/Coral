import { Meta, StoryObj} from "@storybook/react"
import { ProductDescription, ProductDescriptionProps } from "./ProductDescription";

export default {
    title: 'Components/ProductPage/DinamicProduct/ProductDescription',
    component: ProductDescription,
    args: {
        productName:"",
    },
} as Meta<ProductDescriptionProps>


export const Default: StoryObj<ProductDescriptionProps> = {
    args:{
        productName:"cochoa",
    }
}