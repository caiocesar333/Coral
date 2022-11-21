import { Meta, StoryObj} from "@storybook/react"
import { DinamicProduct, DinamicProductProps } from "./DinamicProduct";

export default {
    title: 'Components/ProductPage/DinamicProduct',
    component: DinamicProduct,
    args: {
        productName:"",
        imgUrl:""
    },
} as Meta<DinamicProductProps>


export const Default: StoryObj<DinamicProductProps> = {
    args:{
        productName:"cochoa",
        imgUrl:"cochoaImage"
    }
}