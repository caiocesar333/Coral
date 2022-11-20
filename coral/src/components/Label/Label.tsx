import { Container, P } from "./style";


const seta = ">"

export interface LabelProps{
    productName:string | undefined
}

export function Label({productName}:LabelProps){
    return(
        <Container>
            <P>Home {seta}</P>
            <P>Handbags {seta}</P>
            <P>{productName}</P>
        </Container>
    )
}