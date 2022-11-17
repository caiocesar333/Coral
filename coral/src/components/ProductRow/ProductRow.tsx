import Favorite from "../../assets/wishlist.svg";
import { Img } from "./style";
import { Container, H4, H3, P, Wrapper, Div,Banner } from "./style";


export interface ProductRowProps {
    children?: string,
    image: string,
    name: string,
    description: string,
    price: string
}

export function ProductRow({ image, name, description, price }: ProductRowProps) {
    return (
        <Container>
            <Banner src={image} alt={name} />
            <Div>
                <Wrapper>
                    <H4>{name}</H4>
                    <H3>{description}</H3>
                    <P>{price}</P>
                </Wrapper>
                <Img src={Favorite} alt="" />
            </Div>
        </Container>
    )
}