import { useState } from "react";
import { Container, Wrapper, P, TextDiv, Img } from "./style";
import arrow from "../../assets/icons/arrows/arrowDrop.svg"
import arrowUp from "../../assets/icons/arrows/arrowUp.svg"


export function SelectPayment() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };
    return (
        <Container>
            <TextDiv>
                <P onClick={handleOpen}>Select Payment Method</P>
                <Img onClick={handleOpen} src={open ? arrow : arrowUp} />
            </TextDiv>
            {open
                ? <Wrapper>
                </Wrapper>
                : <></>
            }
        </Container>
    )
}