import { Container, Img, P, TextWrapper, Wrapper } from "./style";
import productImage from "../../../../assets/produtos/coach.svg"

export interface ProdCartItemProps{
    name:string,
    desc:string,
    quantity:string,
}


export function ProdCartItem({name,desc,quantity}:ProdCartItemProps) {
    return (
        <Container>
            <Img src={productImage} />
            <Wrapper>
                <TextWrapper>
                    <P>{name}</P>
                    <P>{desc}</P>
                    <P>Qty- {quantity}</P>
                </TextWrapper>
            </Wrapper>
        </Container>
    )
}