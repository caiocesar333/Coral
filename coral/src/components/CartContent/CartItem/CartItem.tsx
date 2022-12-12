import { useEffect, useState } from "react";
import { TextButtonBlue } from "../../TextComponents/TextButtons/TextButtonBlue";
import { TextButtonRed } from "../../TextComponents/TextButtons/TextButtonRed";
import { ProdCartItem } from "./ProdCartItem/ProdCartItem";
import { ActionWrapper } from "./ProdCartItem/style";
import { Container, ProductWrapper, PriceWrapper, P, Wrapper } from "./style";

export interface CartItemProps{
    actions?: boolean,
}

export function CartItem({actions}:CartItemProps) {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        // getAllUser();
        const getCart = async () => {
            try {
                const api_response = await fetch(
                    "http://localhost:5000/api/carts/find/638c61b80918fe663eee71ed",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGM2MmFhMDkxOGZlNjYzZWVlNzFmNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzAxNDQ3MDIsImV4cCI6MTY3MDQwMzkwMn0.CRzWJ_RMAZ1-viw6cvBWzqb5udFBCDlGZWWJUlBRVw8"
                        }
                    }
                );
                const my_cart = await api_response.json();

                setCart(my_cart.products);
            } catch (err) { }
        };
        getCart();
    }, []);



    return (
        <>
            {cart.map((carrinho: any, index: any) => {
                return (
                    <Container>
                        <ProductWrapper>
                            <ProdCartItem  name={carrinho.name} desc={carrinho.desc} quantity={carrinho.quantity}/>
                        </ProductWrapper>
                        <Wrapper>
                            <PriceWrapper>
                                <P>$ {carrinho.price}</P>
                                <P>{carrinho.quantity}</P>
                                <P>$ {(carrinho.price * carrinho.quantity).toFixed(2)}</P>
                            </PriceWrapper>
                            <ActionWrapper>
                                <TextButtonBlue text="Move to Wishlist" />
                                <TextButtonRed text="Remove" />
                            </ActionWrapper>
                        </Wrapper>
                    </Container>

                )
            })
            }
        </>
    )
}