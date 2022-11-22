import { Container, Cross, Img, P, PriceDiv, PriceTag, TextDiv } from "./style";
import product from "../../assets/products/image.png"
import { QuantityHandle } from "../DeliveryDetails/style";
import crossSmall from "../../assets/crossSmall.svg"

export function ProductBag() {

    return (
        <Container>
            <Img src={product}></Img>
            <TextDiv>
                <P>Coach</P>
                <P>Leather Coach Bag</P>
                <QuantityHandle/>
            </TextDiv>
            <PriceDiv>
                <Cross alt="" src={crossSmall}></Cross>
                <PriceTag>$54.69</PriceTag>
            </PriceDiv>
        </Container>
    )
}