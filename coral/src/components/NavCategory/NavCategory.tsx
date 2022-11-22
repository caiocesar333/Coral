import { Container, P } from "./style";

export interface NavCategoryProps{
    active?: string
}

export function NavCategory({active}: NavCategoryProps){
    const redirect = ()=>{
        window.location.href = "/handbags"
    }
    
    return(
        <Container>
            <P onClick={redirect} color={active}>Handbags</P>
            <P color={active}>Watches</P>
            <P color={active}>Skincare</P>
            <P color={active}>Jewellery</P>
            <P color={active}>Apparels</P>
        </Container>
    )
}