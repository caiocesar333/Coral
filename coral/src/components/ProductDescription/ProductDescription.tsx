import { DinamicPrice } from "../DinamicPrice/DinamicPrice";
import { Star } from "../Icons/Stars";
import { Rating, Rate } from "./style";
import { Container, Description, H3, Wrapper } from "./style";


export interface ProductDescriptionProps {
    productName: string | undefined,
}

export function ProductDescription({ productName }: ProductDescriptionProps) {


    return (
        <Container>
            <Wrapper>
                <H3>{productName}</H3>
                <Description>Leather Coach Bag with adjustable starps.</Description>
                <Rating>
                    <Star></Star>
                    <Rate>(250) Ratings</Rate>
                </Rating>
                <DinamicPrice price="$54.69" oldPrice="$78.66" discount="50%OFF" />
            </Wrapper>
        </Container>
    )
}