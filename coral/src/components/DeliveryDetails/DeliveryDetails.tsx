import { Check, Container, Details, Img, Input, P, Pincode, PincodeCheck, QuantityDiv, Wrapper } from "./style";

import { QuantityHandle } from "../QuantityHandle/QuantityHandle";

export function DeliveryDetails() {


    return (
        <Container>
            <Wrapper>
                <Details>Delivery Details</Details>
                <Check>Check estimated delivery date/pickup option.</Check>
                <QuantityDiv>
                    <Details>Quantity:</Details>
                    <QuantityHandle/>
                </QuantityDiv>
            </Wrapper>
            <Pincode>
                <Input placeholder="Apply Valid Pincode"></Input>
                <PincodeCheck>CHECK</PincodeCheck>
            </Pincode>
        </Container>
    )
}