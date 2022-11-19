import { Container, Img, Select, P, SortBy, ToShow, Showing, Input } from "./style";
import sort from "../../assets/sort.svg"
import grid from "../../assets/grid.svg"

export function ListingOptions() {
    return (
        <Container>
            <Showing>
                <Img src={grid}></Img>
                <Img src={sort}></Img>
                <P>Showing 1 - 40 of 145 items</P>
            </Showing>
            <ToShow>
                <P>To Show</P>
                <Input placeholder="9"></Input>
            </ToShow>
            <SortBy>
                <P>Sort By</P>
                <Select>
                    <option>Position</option>
                    <option>Name</option>
                    <option>Date</option>
                    <option>Price</option>
                </Select>
            </SortBy>
        </Container>
    )
}