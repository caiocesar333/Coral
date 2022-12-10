import { Container, P } from "./style";
import logout from "../../../assets/logout.svg"
import { SmallWhiteButton } from "../../Buttons/WhiteButton/SmallWhiteButton/SmallWhiteButton";

export interface PageTitleProps{
    title:string,
    button?:boolean,
    search?:boolean,
}

export function PageTitle({title,button}:PageTitleProps){
    return(
        <Container>
            <P>{title}</P>
            {button ? <SmallWhiteButton img={logout} text="Logout"/>

                    :<></>
            }
        </Container>
    )
}