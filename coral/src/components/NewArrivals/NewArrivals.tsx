import { Container, H2, P, ProductsDiv, Tab, ViewAll } from "./style";
import Arrow from "../../assets/arrow2.svg"

export function NewArrival() {

    return (
        <Container>
            <Tab>
                <H2>New Arrivals</H2>
                <ViewAll>
                    <P>View All</P>
                    <img src={Arrow} alt="" />
                </ViewAll>
            </Tab>
            <ProductsDiv></ProductsDiv>
        </Container>
    )
}