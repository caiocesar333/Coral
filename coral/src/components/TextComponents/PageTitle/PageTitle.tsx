import { Container, P } from "./style";

export interface PageTitleProps{
    title:string,
}

export function PageTitle({title}:PageTitleProps){
    return(
        <Container>
            <P>{title}</P>
        </Container>
    )
}