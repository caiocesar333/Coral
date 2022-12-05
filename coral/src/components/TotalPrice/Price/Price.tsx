import { useEffect, useState } from "react";
import { P, PriceDiv } from "./style";

export interface PriceProps {
    price: number
}

export function Price() {

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
    console.log(cart)
    let soma = -58.99;
    const [visible, setVisible] = useState(false)

    function handleVisible() {
        setVisible(!visible)
    }

    return (
        <PriceDiv>
            {cart.map((carrinho: any, index: any) => {
                return (
                    <>
                        <P>${carrinho.price}</P>
                    </>
                )
            })
            }
            {cart.map((carrinho: any, index: any) => {
                soma += carrinho.price
                if(soma===0){
                    return <></>
                } else return (<>
                <P>${(soma+58.99).toFixed(2)}</P></>)
            })
            }
        </PriceDiv>
    )

}



