import { useEffect, useState } from "react";
import { Price } from "./Price/Price";
import { Container, P, Type } from "./style";


export function TotalPrice() {

    return (
        <Container>

            <Type>
                <P>Subtotal 1:</P>
                <P>Subtotal 2: </P>
                <P>Total:</P>
            </Type>
            <Price/>

        </Container >
    )
}
