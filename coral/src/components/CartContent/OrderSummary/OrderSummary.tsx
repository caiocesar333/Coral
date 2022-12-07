import { useState } from "react";
import { BlueButton } from "../../Buttons/BlueButton/BlueButton";
import { WhiteButton } from "../../Buttons/WhiteButton/WhiteButton";
import { ProdCartItem } from "../CartItem/ProdCartItem/ProdCartItem";
import { Container, H3, P, TextWrapper, PriceWrapper, Wrapper, ButtonWrapper, ProdWrapper } from "./style";



export function OrderSummary() {
    const [order, setOrder] = useState(true);
    const orderPlaced = () => {
        setOrder(!order)
    }

    return (
        <Container>
            <H3>Order Summary</H3>
            <Wrapper>
                {order
                    ? <><TextWrapper>
                        <P>Sub Total</P>
                        <P>Discount</P>
                        <P>Delivery Fee</P>
                        <P>Grand Total</P>
                    </TextWrapper>
                        <PriceWrapper>
                            <P>$119.69</P>
                            <P>-$13.40</P>
                            <P>-$0.00</P>
                            <P>$285,00</P>
                        </PriceWrapper></>
                    : <>
                        <ProdWrapper>
                            <ProdCartItem name="" desc="" quantity="" />
                            <ProdCartItem name="" desc="" quantity="" />
                        </ProdWrapper>
                    </>
                }
            </Wrapper>
            {order
                ? <><ButtonWrapper>
                    <BlueButton order={order} setOrder={setOrder} text="Place Order" />
                    <WhiteButton text="Continue Shopping" />
                </ButtonWrapper></>
                : <></>
            }

        </Container>
    )

}