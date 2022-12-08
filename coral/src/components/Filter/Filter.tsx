import { FilterOptions } from "../FilterOptions/FilterOptions";
import { Container, H2, P } from "./style";

const seta = ">"

export interface FilterProps{
    filter:any, 
    setFilter:React.Dispatch<React.SetStateAction<string>>,
}

export function Filter({filter,setFilter}:FilterProps){
    return(
        <Container>
            <P>Home {seta} Handbag</P>
            <H2>Handbags</H2>
            <FilterOptions filter={filter} setFilter={setFilter} filterName="Size"/>
            <FilterOptions filter={filter} setFilter={setFilter} filterName="Color"/>
            <FilterOptions filter={filter} setFilter={setFilter} filterName="Brand"/>
            <FilterOptions filter={filter} setFilter={setFilter} filterName="Price Range"/>
            <FilterOptions filter={filter} setFilter={setFilter} filterName="Discount"/>
            <FilterOptions filter={filter} setFilter={setFilter} filterName="Availability"/>
        </Container>
    )
}