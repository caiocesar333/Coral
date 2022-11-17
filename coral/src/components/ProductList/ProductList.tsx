import { useEffect, useState, useRef } from "react";

import { ProductRow } from "../ProductRow/ProductRow";
import { Container } from "./style";
import image from "../../assets/products/image.png"
import image1 from "../../assets/products/image1.png"
import image2 from "../../assets/products/image2.png"
import image3 from "../../assets/products/image3.png"

import { motion } from "framer-motion";

export function ProductList() {
    
    const carousel = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [width, setWidth] = useState(0)

   useEffect(()=>{
     console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
     setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
   }, [])


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
        <Container 
         ref={carousel}
         as={motion.div}
         whileTap={{cursor: "grabbing"}} 
         drag="x"
         dragConstraints={{right: 0, left:-width}}>
            {produtos.map((produto, index) => (
                <ProductRow image={produto.image} name={produto.name}
                    description={produto.description} price={produto.price}></ProductRow>
            ))}
        </Container>
    )
}