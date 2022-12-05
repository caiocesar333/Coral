import { Container, P } from "./style";


export function PlaceOrder(){
    const redirect =()=>{
        window.location.href="http://localhost:3000/mycart"
    } 

    return(
        <Container onClick={redirect}>
            <P>Place Order</P>
        </Container>
    )
}