
import { ProductDescription } from "../ProductDescription/ProductDescription";
import { Img, Container } from "./style";

export interface DinamicProductProps{
    children?:string,
    productName: string | undefined,
    imgUrl:string | undefined,
}

export function DinamicProduct({productName,imgUrl}:DinamicProductProps){
    return(
        <Container>
            <Img src={require('../../assets/products/'+imgUrl+'.png')}></Img>
            <ProductDescription productName={productName}/>
        </Container>
    )
}