import { Container, H3, Img } from "./style";

export interface SectionsProps{
    children?: string,
    image: string,
    title:string,
    url:string
}

export function Sections({image,title,url}:SectionsProps ){

    const redirect = ()=>{
        window.location.href = url
    }

    return(
        <Container>
            <Img onClick={redirect} src={image} alt="" />
            <H3>{title}</H3>
        </Container>
    )
}