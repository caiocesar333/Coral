import { Container, Img, P, Wrapper } from "./style";
import arrow from "../../../assets/arrow2.svg"

export function Orders() {
    return (
        <Container>
            <Wrapper>
                <P>#874522648</P>
                <P>September 5, 2020</P>
                <P>$218.50</P>
                <P>Paid</P>
                <Img src={arrow} alt=""></Img>
            </Wrapper>
        </Container>
    )
}