import { useParams } from "react-router-dom";
import { Container, P } from "./style";

export interface NavCategoryProps{
    active?: string
}

export function NavCategory({active}: NavCategoryProps){

    const redirect = ()=>{
        window.location.href = `/${userId}/handbags/1`
    }

    const {userId} = useParams()

    const redirectError = ()=>{
        window.location.href = "/NotFound"
    }
    
    return(
        <Container>
            <P onClick={redirect} color={active}>Handbags</P>
            <P onClick={redirectError}color={active}>Watches</P>
            <P onClick={redirectError}color={active}>Skincare</P>
            <P onClick={redirectError} color={active}>Jewellery</P>
            <P onClick={redirectError} color={active}>Apparels</P>
        </Container>
    )
}