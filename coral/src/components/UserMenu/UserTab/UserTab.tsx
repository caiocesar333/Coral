import { Container, P } from "./style";
import arrow from "../../../assets/arrow2.svg"
import { useParams } from "react-router-dom";

export interface UserTabProps{
    text:string,
    linkTo:string
}


export function UserTab({text,linkTo}:UserTabProps){

    let {userId} = useParams()

    const redirect = ()=>{
        window.location.href=`${userId}/${linkTo}`

    }
    return(
        <Container onClick={redirect}>
             <P>{text}</P>
             <img src={arrow} alt=""></img>
        </Container>
    )
}