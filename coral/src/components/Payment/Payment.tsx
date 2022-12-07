import { useState } from "react";
import { Container, Wrapper, P, TextDiv, Img } from "./style";
import arrow from "../../assets/icons/arrows/arrowDrop.svg"
import arrowUp from "../../assets/icons/arrows/arrowUp.svg"
import { PaymentContent } from "../PaymentContent/PaymentContent";


export function Payment() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };
    return (
        <Container>
            <TextDiv>
                <P onClick={handleOpen}>Payments</P>
                <Img onClick={handleOpen} src={open ? arrow : arrowUp} />
            </TextDiv>
            {open
                ? <Wrapper>
                    <PaymentContent/>
                </Wrapper>
                : <></>
            }
        </Container>
    )
}