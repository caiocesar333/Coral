
import { Fragment } from "react";
import { Footer } from "../Footer/Footer";
import { InfoTabs } from "../InfoTabs/InfoTabs";
import { ProductDescription } from "../ProductDescription/ProductDescription";
import { ProductSlide } from "../ProductSlide/ProductSlide";
import { Img, Container } from "./style";

export interface DinamicProductProps {
    children?: string,
    productName: string | undefined,
    imgUrl: string | undefined,
}

export function DinamicProduct({ productName, imgUrl }: DinamicProductProps) {
    return (
        <Fragment>
            <Container>
                <Img src={require('../../assets/products/' + imgUrl + '.png')}></Img>
                <ProductDescription productName={productName} />
            </Container>
            <ProductSlide/>
            <InfoTabs />
            <Footer />
        </Fragment>
    )
}