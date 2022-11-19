import { FilterOptions } from "../FilterOptions/FilterOptions";
import { Container, H2, P } from "./style";


export function Filter(){
    return(
        <Container>
            <P>Home Handbag</P>
            <H2>Handbags</H2>
            <FilterOptions filter="Size"/>
            <FilterOptions filter="Color"/>
            <FilterOptions filter="Brand"/>
            <FilterOptions filter="Price Range"/>
            <FilterOptions filter="Discount"/>
            <FilterOptions filter="Availability"/>
        </Container>
    )
}