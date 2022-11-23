
import { useState } from "react";
import { FooterMobile } from "../FooterMobile/FooterMobile";
import { Img } from "../Icons/style";
import { Container, P, TextDiv } from "./style";
import arrow from "../../assets/Mobile/arrowDrop.svg"
import arrowUp from "../../assets/Mobile/arrowUp.svg"


export function DropDownFooter() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };

    return (
        <Container onClick={handleOpen}>
            <TextDiv>
                <P>More about CORA’L</P>
                <Img src={open? arrow : arrowUp} />
            </TextDiv>
            {open
                ? <FooterMobile open={open} setOpen={setOpen}/>
                : <></>
            }
        </Container>
    )
}