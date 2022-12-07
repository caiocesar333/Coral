import { Container, Img, P } from "./style";
import arrowRightSmall from "../../../assets/icons/arrows/arrowRightSmall.svg"

export interface PageLabelProps{
    from: string,
    to: string
}

export function PageLabel({from, to}:PageLabelProps){
    return(
        <Container>
            <P>{from}</P>
            <Img src={arrowRightSmall}/>
            <P>{to}</P>
        </Container>
    )
}