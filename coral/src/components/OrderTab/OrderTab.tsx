import { useEffect, useState } from "react";
import "../../styles/global.css"
import { Orders } from "./Orders/Orders";

import { Container, STab, STabList, STabPanel, STabs } from "./style";
import { TableColums } from "./TableColums/TableColums";


export function OrderTab() {

    const userId = "638c61b80918fe663eee71ed"

    const [orders, setOrder] = useState([]);
    useEffect(() => {
        // getAllUser();
        const getOrder = async () => {
            try {

                const api_response = await fetch(
                    `http://localhost:5000/api/orders/find/${userId}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        }
                    }
                );
                const my_prod = await api_response.json();
                // my_prod.map((prod: any, index: any) => { console.log(my_prod[index]) })
                setOrder(my_prod);
            } catch (err) { }
        };
        getOrder();
    },);

    return (
        <Container>
            <STabs selectedTabClassName="active">
                <STabList>
                    <STab>Completed</STab>
                    <STab>Processing</STab>
                    <STab>Cancelled</STab>
                </STabList>
                <STabPanel>
                    <TableColums />
                    {orders.map((order: any, index: any) => {
                return (
                    <Orders orderId={"#"+order._id.substr(0, 8) + "..."} 
                    date={order.createdAt}
                    amount={order.amount} 
                    status={order.status}/>
                )
            })}
                </STabPanel>
            </STabs>
        </Container>
    )
}