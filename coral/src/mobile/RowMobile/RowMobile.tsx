import Favorite from "../../assets/wishlist.svg";
import { Discount, Img, OldPrice, PriceDiv } from "./style";
import { Container, H4, H3, P, Wrapper, Div, Banner } from "./style";


export interface RowMobileProps {
    children?: string,
    image: string,
    name: string,
    description: string,
    price: string,
    category: boolean
}

export function RowMobile({ image, name, description, price, category }: RowMobileProps) {
    return (
        <Container>
            <Banner src={image} alt={name} />
            <Div>
                <Wrapper>
                    <H4>{name}</H4>
                    <H3>{description}</H3>
                    <PriceDiv>
                        <P>{price}</P>
                        {category
                         ? <><OldPrice>$78.66</OldPrice>
                         <Discount>50% OFF</Discount></>
                         : null   
                        }
                    </PriceDiv>
                </Wrapper>
                <Img src={Favorite} alt="" />
            </Div>
        </Container>
    )
}