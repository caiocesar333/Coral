import { ListingOptions } from "../ListingOptions/ListingOptions";
import { ProductGridList } from "../ProductGridList/ProductGridList";
import { Container } from "./style";

export interface ProdShowcaseROPS{
    filter:any, 
    setFilter:React.Dispatch<React.SetStateAction<string>>,
}


export function ProdShowcase({ filter,setFilter }: ProdShowcaseROPS){
    return(
        <Container>
            <ListingOptions/>
            <ProductGridList filter={filter} setFilter={setFilter}/>
        </Container>
    )
}