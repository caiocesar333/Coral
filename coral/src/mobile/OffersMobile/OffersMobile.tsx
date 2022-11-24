
import { Container,CodeDiv, Get, P, Wrapper, Use } from "./style";


export function OffersMobile(){
    return(
        <Container>
            <Wrapper>
                <Get>Get upto 30% Off on order value above $100</Get>
                <P>Terms & Conditions</P>
            </Wrapper>
            <CodeDiv>
                <Use>Use Code</Use>
                <Get>ORDER100</Get>
            </CodeDiv>
        </Container>
    )
}