import { Container, P, Price, Type } from "./style";


export function TotalPrice(){
    return(
        <Container>
            <Type>
                <P>Subtotal:</P>
                <P>Tax:</P>
                <P>Total:</P>
            </Type>
            <Price>
                <P>$109.38</P>
                <P>$2.00</P>
                <P>$111.38</P>
            </Price>
        </Container>
    )
}