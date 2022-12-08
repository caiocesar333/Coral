import { useState } from "react";
import { Filter } from "../..//Filter/Filter";
import { ProdShowcase2 } from "../../ProductsShowcase/Page2/ProdShowcase2";
import { Container } from "../style";


export function Showcase2(){

    const [filter, setFilter] = useState("initial");
    return(
        <Container>
            <Filter filter={filter} setFilter={setFilter}></Filter>
            <ProdShowcase2></ProdShowcase2>
        </Container>
    )
}