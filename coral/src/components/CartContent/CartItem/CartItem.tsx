import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RenderCartItem } from "./RenderCartItem/RenderCartItem";

export interface CartItemProps {
    actions: boolean,
    order?: boolean,
    subTotal: number,
    setPrice: React.Dispatch<React.SetStateAction<number>> | any
}

export function CartItem({ actions, order, subTotal, setPrice }: CartItemProps) {

    let { orderId } = useParams()
    const [cart, setCart] = useState([]);
    const [orders, setOrder] = useState<any>([]);

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
        const getOrder = async () => {
            try {

                const api_response = await fetch(
                    `http://localhost:5000/api/orders/${orderId}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        }
                    }
                );
                const my_orders = await api_response.json();
                // my_prod.map((prod: any, index: any) => { console.log(my_prod[index]) })
                setOrder(my_orders.products);
                
            } catch (err) { }

        };
        getOrder();
        getCart();
    },);

    if (!order) {
        return (
            <>
                {cart.map((carrinho: any, index: any) => {
                    return (
                        <RenderCartItem setPrice={setPrice} name={carrinho.name} desc={carrinho.desc}
                            quantity={carrinho.quantity} price={carrinho.price} actions={actions} subTotal={subTotal} />

                    )
                })
                }
            </>
        )
    } else {
        return (
            <>{orders.map((produto: any, index: any) => {

                

                return (
                    <RenderCartItem setPrice={setPrice} name={produto.name} desc={produto.desc}
                        quantity={produto.quantity} price={produto.price} actions={actions} subTotal={subTotal} />
                )
            })
            }
            </>
        )
    }
}