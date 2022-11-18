import { ProductSections } from "../ProductSections/ProductSections";
import { Container, H1 } from "./style";


export function Handpicked(){
    return(
        <Container>
            <H1>Handpicked Collections </H1>
            <ProductSections></ProductSections>
        </Container>
    )
}