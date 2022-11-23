import { Container, Img } from "./style";

export interface SectionsProps{
    children?: string,
    image: string,
    url:string
}

export function Sections({image,url}:SectionsProps ){

    const redirect = ()=>{
        window.location.href = url
    }

    return(
        <Container>
            <Img onClick={redirect} src={image} alt="" />
        </Container>
    )
}