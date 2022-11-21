
import { Fragment } from "react";
import { Footer } from "../Footer/Footer";
import { InfoTabs } from "../InfoTabs/InfoTabs";
import { ProductDescription } from "../ProductDescription/ProductDescription";
import { Img, Container } from "./style";

export interface DinamicProductProps{
    children?:string,
    productName: string | undefined,
    imgUrl:string | undefined,
}

export function DinamicProduct({productName,imgUrl}:DinamicProductProps){
    return(
        <Fragment>
            <Container>
            <Img src={require('../../assets/products/'+imgUrl+'.png')}></Img>
            <ProductDescription productName={productName}/>
        </Container>
        <InfoTabs/>
        <Footer/>
        </Fragment>
    )
}