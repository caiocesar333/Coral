import { Container, Img } from "./style";
import arrow from "../../assets/Mobile/arrowCategory.svg"

export function BackLabel(){
    return(
        <Container>
            <Img src={arrow}/>
        </Container>
    )
}