import { Brands } from "../Brands/Brands";
import { Tab, H2 } from "../NewArrivals/style";
import { Container } from "./style";


export function ShopByBrands() {
    return (
        <Container>
            <Tab>
                <H2>Shop By Brands</H2>
            </Tab>
            <Brands />
        </Container>
    )
}