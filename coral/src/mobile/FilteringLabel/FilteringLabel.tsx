import { Container, Img } from "./style";
import sort from "../../assets/Mobile/Filtering/sort.svg"
import filter from "../../assets/Mobile/Filtering/filter.svg"

export function FilteringLabel(){
    return(
        <Container>
            <Img src={sort}/>
            <Img src={filter}/>
        </Container>
    )
}