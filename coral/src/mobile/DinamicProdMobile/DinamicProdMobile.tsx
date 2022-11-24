import { Container, Img } from "./style";
import image from "../../assets/Mobile/Products/ProductPage/1.png"
import { DescriptionMobile } from "../DescriptionMobile/DescriptionMobile";
import { OffersMobile } from "../OffersMobile/OffersMobile";
import { DeliveryMobile } from "../DeliveyMobile/DeliveyMobile";

export interface DinamicProductProps {
    children?: string,
    productName: string | undefined,
}


export function DinamicProdMobile({ productName}: DinamicProductProps) {
    return (
        <Container>
            <Img src={image}></Img>
            <DescriptionMobile productName={productName}/>
            <OffersMobile></OffersMobile>
            <DeliveryMobile></DeliveryMobile>
        </Container>
    )
}