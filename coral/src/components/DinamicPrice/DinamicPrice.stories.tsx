import { Meta, StoryObj} from "@storybook/react"
import { DinamicPrice, DinamicPriceProps } from "./DinamicPrice";

export default {
    title: 'Components/ProductPage/DinamicProduct/ProductDescription/DinamicPrice',
    component: DinamicPrice,
    args: {
        price:"",
        oldPrice:"",
        discount:""
    },
} as Meta<DinamicPriceProps>


export const Default: StoryObj<DinamicPriceProps> = {
    args:{
        price:"$54.69",
        oldPrice:"$78.66",
        discount:"50%OFF"
    }
}