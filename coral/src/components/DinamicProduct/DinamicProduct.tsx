
import { Img, P, Container } from "./style";

export interface DinamicProductProps{
    children?:string,
    productname: string | undefined,
    imgUrl:string | undefined,
}

export function DinamicProduct({productname,imgUrl}:DinamicProductProps){
    return(
        <Container>
            <Img src={require('../../assets/products/'+imgUrl+'.png')}></Img>
            <P>{productname}</P>
        </Container>
    )
}