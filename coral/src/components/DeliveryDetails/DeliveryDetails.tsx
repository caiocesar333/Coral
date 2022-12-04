import { Check, Container, Details, QuantityDiv, Wrapper } from "./style";

import { QuantityHandle } from "../QuantityHandle/QuantityHandle";
import { Pincode } from "../Pincode/Pincode";

export function DeliveryDetails() {


    return (
        <Container>
            <Wrapper>
                <Details>Delivery Details</Details>
                <Check>Check estimated delivery date/pickup option.</Check>
                <QuantityDiv>
                    <Details>Quantity:</Details>
                    <QuantityHandle quantity={1}/>
                </QuantityDiv>
            </Wrapper>
            <Pincode placeholder="Valid Pincode"/>
        </Container>
    )
}