import { useState } from "react";
import { Filter } from "../Filter/Filter";
import { ProdShowcase } from "../ProductsShowcase/ProdShowcase";
import { Container } from "./style";


export function Showcase(){

    const [filter, setFilter] = useState("initial");
    

    return(
        <Container>
            <Filter filter={filter} setFilter={setFilter}></Filter>
            <ProdShowcase filter={filter} setFilter={setFilter}></ProdShowcase>
        </Container>
    )
}