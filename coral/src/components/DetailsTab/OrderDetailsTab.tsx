import { useState } from "react";
import "../../styles/global.css"
import { CartItem } from "../CartContent/CartItem/CartItem";
import { TableLabel } from "../CartContent/ProductTable/Table/TableLabel/TableLabel";
import { OrderInformation } from "../OrderInformation/OrderInformation";

import { Container, STab, STabList, STabPanel, STabs } from "./style";


export function OrderDetailsTab() {

    const [subTotal, setPrice] = useState(0)

    return (
        <Container>
            <STabs selectedTabClassName="active">
                <STabList>
                    <STab>Items Ordered</STab>
                    <STab>Invoices</STab>
                    <STab>Order Shipment</STab>
                </STabList>
                <STabPanel>
                    <TableLabel />
                    <CartItem order={true} actions={false} setPrice={setPrice} subTotal={subTotal} />
                    <OrderInformation price={subTotal}/>
                </STabPanel>
                <STabPanel></STabPanel>
                <STabPanel></STabPanel>
            </STabs>
        </Container>
    )
}