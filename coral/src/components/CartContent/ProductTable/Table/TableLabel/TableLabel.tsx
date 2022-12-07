import { Container, P, Wrapper } from "./style";


export function TableLabel() {
    return (
        <Container>
            <P>Product Name</P>
            <Wrapper>
                <P>Price</P>
                <P>Qty</P>
                <P>Subtotal</P>
            </Wrapper>
        </Container>
    )
}