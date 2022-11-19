import { Filter } from "../Filter/Filter";
import { ProdShowcase } from "../ProductsShowcase/ProdShowcase";
import { Container } from "./style";


export function Showcase(){
    return(
        <Container>
            <Filter></Filter>
            <ProdShowcase></ProdShowcase>
        </Container>
    )
}