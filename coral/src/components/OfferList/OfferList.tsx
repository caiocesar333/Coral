import { useEffect, useRef, useState } from "react";
import { Container } from "./style";
import { motion } from "framer-motion";
import { Offers } from "../Offers/Offers";

export function OfferList(){
    const carousel = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [width, setWidth] = useState(0)

   useEffect(()=>{
     console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
     setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
   }, [])
    return(
        <Container 
         ref={carousel}
         as={motion.div}
         whileTap={{cursor: "grabbing"}} 
         drag="x"
         dragConstraints={{right: 0, left:-width}}>
            <Offers/>
            {/* <Offers/> */}
        </Container>
    )
}