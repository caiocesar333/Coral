import { Container } from "./style";

import image from "../../assets/products/image.png"
import image1 from "../../assets/products/image1.png"
import image2 from "../../assets/products/image2.png"
import image3 from "../../assets/products/image3.png"
import { ProductGrid } from "../ProductGrid/ProductGrid";


export function ProductGridList() {
    
    const produtos = [{
        image: image,
        name: "grande",
        description: "Blossom Pouch",
        price: "$39.49"
    },
    {
        image: image1,
        name: "coach",
        description: "Leather Coach Bag",
        price: "$54.69"
    },
    {
        image: image2,
        name: "remus",
        description: "Brown Strap Bag",
        price: "$57.00"
    },
    {
        image: image3,
        name: "boujee",
        description: "Black Bag",
        price: "$56.49"
    },
    {
        image: image,
        name: "grande",
        description: "Blossom Pouch",
        price: "$39.49"
    },
    {
        image: image1,
        name: "coach",
        description: "Leather Coach Bag",
        price: "$54.69"
    },
    {
        image: image1,
        name: "boujee",
        description: "Black Bag",
        price: "$56.49"
    },
    {
        image: image2,
        name: "grande",
        description: "Blossom Pouch",
        price: "$39.49"
    },
    {
        image: image3,
        name: "coach",
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