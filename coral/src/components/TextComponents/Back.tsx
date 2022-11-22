import { Container, Img, P } from "./style";
import arrow from "../../assets/arrowBack.svg"

export function Back(){
    return(
        <Container>
            <Img src={arrow}/>
            <P>Back</P>
        </Container>
    )
}