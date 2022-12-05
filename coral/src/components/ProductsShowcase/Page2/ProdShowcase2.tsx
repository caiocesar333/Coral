import { ListingOptions } from "../../ListingOptions/ListingOptions";
import { ProductGridList2 } from "../../ProductGridList/Page2/ProductGridList2";
import { Container } from "../style";


export function ProdShowcase2(){
    return(
        <Container>
            <ListingOptions/>
            <ProductGridList2/>
        </Container>
    )
}