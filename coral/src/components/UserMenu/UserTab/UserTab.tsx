import { Container, P } from "./style";
import arrow from "../../../assets/arrow2.svg"

export interface UserTabProps{
    text:string
}


export function UserTab({text}:UserTabProps){
    return(
        <Container>
             <P>{text}</P>
             <img src={arrow} alt=""></img>
        </Container>
    )
}