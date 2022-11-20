import { Meta, StoryObj} from "@storybook/react"
import { ProductGrid, ProductGridProps } from "./ProductGrid";
import image from "../../assets/products/image.png"
import image1 from "../../assets/products/image1.png"
import image2 from "../../assets/products/image2.png"
import image3 from "../../assets/products/image3.png"


export default {
    title: 'Components/Product/ProductGrid',
    component: ProductGrid,
    args: {
        children: "string",
        image: image,
        name: "Grande",
        description: "Blossom Pouch",
        price: "$39.49"
    },
} as Meta<ProductGridProps>


export const Product1: StoryObj<ProductGridProps> = {
    args:{
        children: "ProductGrid",
        image: image,
        name: "Grande",
        description: "Blossom Pouch",
        price: "$39.49"
    }
}

export const Product2: StoryObj<ProductGridProps> = {
    args:{
        children: "ProductGrid",
        image: image1,
        name: "Coach",
        description: "Leather Coach Bag",
        price: "$54.69"
    }
}

export const Product3: StoryObj<ProductGridProps> = {
    args:{
        children: "ProductGrid",
        image: image2,
        name: "Remus",
        description: "Brown Strap Bag",
        price: "$57.00"
    }
}

export const Product4: StoryObj<ProductGridProps> = {
    args:{
        children: "ProductGrid",
        image: image3,
        name: "Boujee",
        description: "Black Bag",
        price: "$56.49"
    }
}