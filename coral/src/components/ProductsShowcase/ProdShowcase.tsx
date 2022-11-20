import { ListingOptions } from "../ListingOptions/ListingOptions";
import { ProductGridList } from "../ProductGridList/ProductGridList";
import { Container } from "./style";


export function ProdShowcase(){
    return(
        <Container>
            <ListingOptions/>
            <ProductGridList/>
        </Container>
    )
}