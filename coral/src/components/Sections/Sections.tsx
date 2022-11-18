import { Container, H3, Img } from "./style";

export interface SectionsProps{
    children?: string,
    image: string,
    title:string,
}

export function Sections({image,title}:SectionsProps ){
    return(
        <Container>
            <Img src={image} alt="" />
            <H3>{title}</H3>
        </Container>
    )
}