import { useEffect, useState, useRef } from "react";

import {RowMobile} from "../RowMobile/RowMobile"
import { Container } from "./style";

import image from "../../assets/Mobile/Products/image.svg"
import image1 from "../../assets/Mobile/Products/image1.svg"
import image2 from "../../assets/Mobile/Products/image2.svg"
import { motion } from "framer-motion";

export function RowListMobile(){

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
        image: image,
        name: "Coach",
        description: "Leather Coach Bag",
        price: "$57.00"
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
                <RowMobile image={produto.image} name={produto.name}
                    description={produto.description} price={produto.price} category={false}></RowMobile>
            ))}
        </Container>
    )
}