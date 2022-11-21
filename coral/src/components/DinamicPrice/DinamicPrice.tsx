import { Container, Discount, Old, Price } from "./style";

export interface DinamicPriceProps{
    price:string,
    oldPrice?:string,
    discount?:string,
}

export function DinamicPrice({price, oldPrice,discount}: DinamicPriceProps){
    return(
        <Container>
            <Price>{price}</Price>
            <Old>{oldPrice}</Old>
            <Discount>{discount}</Discount>
        </Container>
    )
}