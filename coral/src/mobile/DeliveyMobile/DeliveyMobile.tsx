import { Check, Container, Details, Pincode, Wrapper,Input,PincodeCheck } from "./style";


export function DeliveryMobile() {
    return (
        <Container>
            <Wrapper>
                <Details>Delivery Details</Details>
                <Check>Check estimated delivery date/pickup option.</Check>
            </Wrapper>
            <Pincode>
                <Input placeholder="Enter Valid Pincode"></Input>
                <PincodeCheck>CHECK</PincodeCheck>
            </Pincode>
        </Container>
    )
}