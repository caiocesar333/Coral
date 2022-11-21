import { Container, P } from "./style";
import {Favorite} from "../../Icons/Favorite"

export function AddWishButton(){
    return(
        <Container>
            <Favorite/>
            <P>Add</P>
            <P>to</P>
            <P>Wishlist</P>
        </Container>
    )
}