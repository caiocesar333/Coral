import { Container, RadioInput, Item, InputOption } from "./styled";


export function SortMobile() {
    return (
        <Container>
            <Item>
                <RadioInput type="radio"></RadioInput>
                <InputOption>Latest Products</InputOption>
            </Item>
            <Item>
                <RadioInput type="radio"></RadioInput>
                <InputOption>Price- Low to High</InputOption>
            </Item>
            <Item>
                <RadioInput type="radio"></RadioInput>
                <InputOption>Price- High to Low</InputOption>
            </Item>
            <Item>
                <RadioInput type="radio"></RadioInput>
                <InputOption>Popularity</InputOption>
            </Item>
            <Item>
                <RadioInput type="radio"></RadioInput>
                <InputOption>Customer Ratings</InputOption>
            </Item>
        </Container>
    )
}