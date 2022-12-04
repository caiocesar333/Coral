import { Container, Cross, Img, Item, P, PriceDiv, PriceTag, TextDiv, Wrapper } from "./style";
import product from "../../assets/products/image.png"
import crossSmall from "../../assets/crossSmall.svg"
import { QuantityHandle } from "../QuantityHandle/QuantityHandle";
import { useEffect, useState } from "react";

export function ProductBag() {

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
        <Container>
            <Wrapper>
                {cart.map((produto: any, index: any) => {
                    return (
                        <Item>
                            <Img src={product}></Img>
                            <TextDiv>
                                <P>{produto.name}</P>
                                <P>{produto.desc}</P>
                                <QuantityHandle quantity={produto.quantity}/>
                            </TextDiv>
                            <PriceDiv>
                                <Cross alt="" src={crossSmall}></Cross>
                                <PriceTag>{produto.price}</PriceTag>
                            </PriceDiv>
                        </Item>
                    )
                })} 
            </Wrapper >
        </Container >
    )
}