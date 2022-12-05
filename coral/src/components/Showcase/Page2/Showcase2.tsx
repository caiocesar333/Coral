import { Filter } from "../..//Filter/Filter";
import { ProdShowcase2 } from "../../ProductsShowcase/Page2/ProdShowcase2";
import { Container } from "../style";


export function Showcase2(){
    return(
        <Container>
            <Filter></Filter>
            <ProdShowcase2></ProdShowcase2>
        </Container>
    )
}