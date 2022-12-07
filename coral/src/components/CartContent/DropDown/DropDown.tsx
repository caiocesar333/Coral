
import { useState } from "react";
import { Container, P, TextDiv,Img } from "./style";
import arrow from "../../../assets/icons/arrows/arrowDrop.svg"
import arrowUp from "../../../assets/icons/arrows/arrowUp.svg"
import { Pincode } from "./Pincode/Pincode";

export interface DropDownProps{
    text:string
}

export function DropDown({text}:DropDownProps) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };
    return (
        <Container>
            <TextDiv>
                <P onClick={handleOpen}>{text}</P>
                <Img onClick={handleOpen} src={open? arrow : arrowUp} />
            </TextDiv>
            {open
                ? <Pincode placeholder="Apply Coupon Code"/>
                : <></>
            }
        </Container>
    )
}