import { Container, P } from "./style";
import arrow from "../../../assets/arrow2.svg"

export interface UserTabProps{
    text:string,
    linkTo:string
}


export function UserTab({text,linkTo}:UserTabProps){

    const redirect = ()=>{
        window.location.href=`/${linkTo}`

    }
    return(
        <Container onClick={redirect}>
             <P>{text}</P>
             <img src={arrow} alt=""></img>
        </Container>
    )
}