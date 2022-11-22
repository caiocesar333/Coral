import { Container, Span } from "./style";
import "../../styles/global.css"

export function Logo(){
    const redirect = ()=>{
        window.location.href = "/home"
    }

    return(
        <Container>
            <Span onClick={redirect}> CORA'L</Span>
        </Container>
    )
}