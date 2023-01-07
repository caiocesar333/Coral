
import { TextButtonBlue } from "../../../TextComponents/TextButtons/TextButtonBlue";
import { TextButtonRed } from "../../../TextComponents/TextButtons/TextButtonRed";
import { ProdCartItem } from "../ProdCartItem/ProdCartItem";
import { ActionWrapper } from "../ProdCartItem/style";
import { Container, ProductWrapper, PriceWrapper, P, Wrapper } from "./style";

export interface RenderCartItemProps {
    actions: boolean,
    order?: boolean,
    name: string,
    desc: string,
    quantity: number,
    price: number,
    subTotal: number,
    setPrice: React.Dispatch<React.SetStateAction<number>> | any
}

export function RenderCartItem({ actions, order, name, desc, quantity, price, setPrice, subTotal }: RenderCartItemProps) {

    return (
        <Container onLoad={() => setPrice((subTotal: number) => subTotal + (price * quantity))}>
            <ProductWrapper>
                <ProdCartItem name={name} desc={desc} quantity={quantity.toString()} />
            </ProductWrapper>
            <Wrapper>
                <PriceWrapper>
                    <P>$ {price}</P>
                    <P>{quantity}</P>
                    <P>$ {(price * quantity).toFixed(2)}</P>
                </PriceWrapper>
                {actions ? <>
                    <ActionWrapper>
                        <TextButtonBlue text="Move to Wishlist" />
                        <TextButtonRed text="Remove" />
                    </ActionWrapper></>
                    : <></>}
            </Wrapper>
        </Container>
    )
}