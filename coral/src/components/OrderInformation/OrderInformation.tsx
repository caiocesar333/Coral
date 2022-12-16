import { P } from "../AddNewAddress/style";
import { AddressDetails, Container, PaymentDetails, TextDiv, Wrapper, OrderDetails, Info } from "./style";

export interface OrderInformationProps{
    price:number,
}


export function OrderInformation({price}:OrderInformationProps) {

    let discount = 13.40
    return (
        <Container>
            <P>Order Information</P>
            <Wrapper>
                <OrderDetails>
                    <TextDiv>
                        <Info>Order Details</Info>
                    </TextDiv>
                    <TextDiv>
                        <Info>Sub Total</Info>
                        <Info>{price}</Info>
                    </TextDiv>
                    <TextDiv>
                        <Info>Discount</Info>
                        <Info>-${discount}</Info>
                    </TextDiv>
                    <TextDiv>
                        <Info>Delivery Fee</Info>
                        <Info>-$0.00</Info>
                    </TextDiv>
                    <TextDiv>
                        <Info>Grand Total</Info>
                        <Info>${(price - discount).toFixed(2)}</Info>
                    </TextDiv>
                </OrderDetails>
                <PaymentDetails>
                    <Info>Payment Details</Info>
                    <Info>Cash on Delivery</Info>
                </PaymentDetails>
                <AddressDetails>
                   <Info>Address Details</Info>
                   <Info>Vincent Lobo</Info>
                   <Info>3068 Woodlawn Drive</Info>
                   <Info>Milwaukee</Info>
                   <Info>414-672-5388</Info>
                </AddressDetails>
            </Wrapper>
        </Container>
    )
}