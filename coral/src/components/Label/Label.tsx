import { Container, P } from "./style";


const seta = ">"

export interface LabelProps{
    productName:string | undefined
}

export function Label({productName}:LabelProps){
    const redirectHome = ()=>{
        window.location.href = "/home"
    }
    const redirectHandbags = ()=>{
        window.location.href = "/handbags"
    }

    return(
        <Container>
            <P onClick={redirectHome}>Home {seta}</P>
            <P onClick={redirectHandbags}>Handbags {seta}</P>
            <P>{productName}</P>
        </Container>
    )
}