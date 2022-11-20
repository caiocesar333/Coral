import { ListingOptions } from "../ListingOptions/ListingOptions";
import { ProductGrid } from "../ProductGrid/ProductGrid";
import { Container } from "./style";


export function ProdShowcase(){
    return(
        <Container>
            <ListingOptions/>
            <ProductGrid></ProductGrid>
        </Container>
    )
}