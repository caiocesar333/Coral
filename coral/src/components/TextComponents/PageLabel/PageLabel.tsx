import { Container, Img, P } from "./style";
import arrowRightSmall from "../../../assets/icons/arrows/arrowRightSmall.svg"

export interface PageLabelProps{
    from: string,
    to: string,
    andTo?: string
}

export function PageLabel({from, to,andTo}:PageLabelProps){
    return(
        <Container>
            <P>{from}</P>
            <Img src={arrowRightSmall}/>
            <P>{to}</P>
            {
                andTo ?<><Img src={arrowRightSmall}/> <P>{andTo}</P></> : <></>

            }
        </Container>
    )
}