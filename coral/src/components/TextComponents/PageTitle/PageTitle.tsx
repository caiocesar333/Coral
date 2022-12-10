import { Container, P } from "./style";

export interface PageTitleProps{
    title:string,
    button?:boolean,
    search?:boolean,
}

export function PageTitle({title}:PageTitleProps){
    return(
        <Container>
            <P>{title}</P>
        </Container>
    )
}