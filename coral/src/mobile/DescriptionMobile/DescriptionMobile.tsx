import {
    Container, TextDiv, Name, Desc,
    PriceDiv, Price, OldPrice, Discount,
    RatingDiv,
    Rate,
    Average,
    Text
} from "./style";
import rate from "../../assets/Mobile/Products/rate.svg"

export interface DescriptionMobileProps {
    productName: string | undefined,
}



export function DescriptionMobile({ productName }: DescriptionMobileProps) {
    return (
        <Container>
            <TextDiv>
                <Name>{productName}</Name>
                <Desc>Leather Coach Bag with adjustable starps.</Desc>
                <PriceDiv>
                    <Price>$54.69</Price>
                    <OldPrice>$69.99    </OldPrice>
                    <Discount>20%OFF</Discount>
                </PriceDiv>
                <RatingDiv>
                    <Rate src={rate}></Rate>
                    <TextDiv>
                        <Average>Average Rating</Average>
                        <Text>43 Ratings & 23 Reviews</Text>
                    </TextDiv>
                </RatingDiv>
            </TextDiv>
        </Container>
    )
}