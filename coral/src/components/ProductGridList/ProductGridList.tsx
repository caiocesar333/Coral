import { Container } from "./style";

import image from "../../assets/products/image.png"
import image1 from "../../assets/products/image1.png"
import image2 from "../../assets/products/image2.png"
import image3 from "../../assets/products/image3.png"
import { ProductGrid } from "../ProductGrid/ProductGrid";


export function ProductGridList() {
    
    const produtos = [{
        image: image,
        name: "Grande",
        description: "Blossom Pouch",
        price: "$39.49"
    },
    {
        image: image1,
        name: "Coach",
        description: "Leather Coach Bag",
        price: "$54.69"
    },
    {
        image: image2,
        name: "Remus",
        description: "Brown Strap Bag",
        price: "$57.00"
    },
    {
        image: image3,
        name: "Boujee",
        description: "Black Bag",
        price: "$56.49"
    },
    {
        image: image,
        name: "Grande",
        description: "Blossom Pouch",
        price: "$39.49"
    },
    {
        image: image1,
        name: "Coach",
        description: "Leather Coach Bag",
        price: "$54.69"
    },
    ]

    return (
        <Container>
            {produtos.map((produto, index) => (
                <ProductGrid image={produto.image} name={produto.name}
                    description={produto.description} price={produto.price}></ProductGrid>
            ))}
        </Container>
    )
}