import { Check, Container, Details, Img, Input, P, Pincode, PincodeCheck, QuantityDiv, QuantityHandle, Wrapper } from "./style";
import minus from "../../assets/minus.svg"
import plus from "../../assets/plus.svg"
import { useState } from "react";

export function DeliveryDetails() {

    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
      };

    return (
        <Container>
            <Wrapper>
                <Details>Delivery Details</Details>
                <Check>Check estimated delivery date/pickup option.</Check>
                <QuantityDiv>
                    <Details>Quantity:</Details>
                    <QuantityHandle>
                        <Img src={minus}></Img>
                        <P>{count}</P>
                        <Img onClick={incrementCount} src={plus}></Img>
                    </QuantityHandle>
                </QuantityDiv>
            </Wrapper>
            <Pincode>
                <Input placeholder="Apply Valid Pincode"></Input>
                <PincodeCheck>CHECK</PincodeCheck>
            </Pincode>
        </Container>
    )
}