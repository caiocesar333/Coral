import Favorite from "../../assets/wishlist.svg";
import { Star } from "../Icons/Stars";
import { Discount, OldPrice, PriceDiv, Rate, Rating } from "./style";
import { Container, Img, H4, H3, P, Wrapper, Div, Banner } from "./style";


export interface ProductGridProps {
    children?: string,
    image?: string,
    name: string,
    description: string,
    price: string,
}

export function ProductGrid({ image, name, description, price }: ProductGridProps) {
    const redirect = ()=>{
        window.location.href = `product/${name}/${name}Image`
    }
    return (
        <Container>
            <Banner onClick={redirect} src={image} alt={name} />
            <Div>
                <Wrapper>
                    <H4 onClick={redirect}>{name}</H4>
                    <H3>{description}</H3>
                    <Rating>
                        <Star />
                        <Rate>43 Ratings</Rate>
                    </Rating>
                    <PriceDiv>
                        <P>{price}</P>
                        <OldPrice>$78.66</OldPrice>
                        <Discount>50% OFF</Discount>
                    </PriceDiv>
                </Wrapper>
                <Img src={Favorite} alt="" />
            </Div>
        </Container>
    )
}