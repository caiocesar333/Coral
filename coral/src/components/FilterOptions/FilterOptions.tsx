import { Container, Img, P } from "./style";
import plus from "../../assets/plus.svg"

export interface FilterOptionsProps{
    filter:string
}

export function FilterOptions({filter}:FilterOptionsProps){
    return(
        <Container>
            <P>{filter}</P>
            <Img src={plus}></Img>
        </Container>
    )
}