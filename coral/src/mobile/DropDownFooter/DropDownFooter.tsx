
import { useState } from "react";
import { FooterMobile } from "../FooterMobile/FooterMobile";
import { Img } from "../Icons/style";
import { Container, P, TextDiv } from "./style";
import arrow from "../../assets/Mobile/arrowDrop.svg"

export function DropDownFooter() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };

    return (
        <Container onClick={handleOpen}>
            <TextDiv>
                <P>More about CORA’L</P>
                <Img src={arrow}/>
            </TextDiv>
            {open
                ? <FooterMobile />
                : <></>
            }
        </Container>
    )
}