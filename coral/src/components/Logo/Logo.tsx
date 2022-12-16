import { Container, Span } from "./style";
import "../../styles/global.css"
import { useParams } from "react-router-dom";

export function Logo(){
    const redirect = ()=>{
        window.location.href = `/${userId}/home`
    }

    const {userId} = useParams()
    return(
        <Container>
            <Span onClick={redirect}> CORA'L</Span>
        </Container>
    )
}