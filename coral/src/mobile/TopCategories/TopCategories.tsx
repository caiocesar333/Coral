import { Container, Img } from "./style";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import skincare from "../../assets/Mobile/TopCategories/skincare.svg"
import jewellery from "../../assets/Mobile/TopCategories/jewellery.svg"
import handbags from "../../assets/Mobile/TopCategories/handbags.svg"
import watches from "../../assets/Mobile/TopCategories/watches.svg"
import eyewear from "../../assets/Mobile/TopCategories/eyewear.svg"

export function TopCategories(){

    const carousel = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [width, setWidth] = useState(0)

   useEffect(()=>{
     console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
     setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
   }, [])


    const categories = [{
        image: skincare,
    },
    {
        image: jewellery
    },
    {
        image: handbags
    },
    {
        image: watches
    },
    {
        image: eyewear
    }

    ]
    return(
        <Container 
         ref={carousel}
         as={motion.div}
         whileTap={{cursor: "grabbing"}} 
         drag="x"
         dragConstraints={{right: 0, left:-width}}>
            {categories.map((categories, index) => (
                <Img src={categories.image}/>
            ))}
        </Container>
    )
}