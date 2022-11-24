
import { useState } from "react";
import { Img } from "../Icons/style";
import { Container, P, TextDiv } from "./style";
import arrowDrop from "../../assets/Mobile/arrowDrop.svg"
import arrowUp from "../../assets/Mobile/arrowUp.svg"

export interface ProdDescMobileProps{
    title:string,
    arrow:boolean
}

export function ProdDescMobile({title, arrow}:ProdDescMobileProps) {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };

    return (
        <Container onClick={handleOpen}>
            <TextDiv>
                <P>{title}</P>
                {arrow
                    ? <Img src={open ? arrowDrop : arrowUp} />
                    : <></>
                }
            </TextDiv>
            {open
                ? <P>Product Description
                    Experience comfortable and easy travelling like never before with this coach bag. It features a zip closure, 
                    removable straps and multiple organization compartments to keep your 
                    valuables safe. Crafted from premium material, it is durable and lasts long.</P>
                : <></>
            }
        </Container>
    )
}