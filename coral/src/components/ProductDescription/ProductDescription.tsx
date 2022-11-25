import { AddBagButton } from "../Buttons/AddBagButton/AddBagButton";
import { AddWishButton } from "../Buttons/AddWishButton/AddWishButton";
import { DeliveryDetails } from "../DeliveryDetails/DeliveryDetails";
import { DinamicPrice } from "../DinamicPrice/DinamicPrice";
import { Star } from "../Icons/Stars";
import { OfferList } from "../OfferList/OfferList";
// import { Offers } from "../Offers/Offers";
import { Rating, Rate, OffersDiv, ButtonsDiv } from "./style";
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
            <DeliveryDetails />
            <OffersDiv>
                <OfferList/>
            </OffersDiv>
            <ButtonsDiv>
                <AddBagButton />
                <AddWishButton/>
            </ButtonsDiv>
        </Container>
    )
}