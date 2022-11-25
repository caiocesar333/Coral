import { Container, Img,Arrow } from "./style";
import error from "../../../assets/404/404.jpg"
import arrowBack from "../../../assets/arrowBack.svg"


export function Error(){
    const redirect = () =>{
        window.location.href = "/home"
    }
    return(
        <Container>
            <Img src={error}/>
            <Arrow onClick={redirect} src={arrowBack}/>
        </Container>
    )
}