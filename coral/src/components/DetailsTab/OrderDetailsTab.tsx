import "../../styles/global.css"
import { CartItem } from "../CartContent/CartItem/CartItem";
import { TableLabel } from "../CartContent/ProductTable/Table/TableLabel/TableLabel";
import { OrderInformation } from "../OrderInformation/OrderInformation";

import { Container, STab, STabList, STabPanel, STabs } from "./style";


export function OrderDetailsTab() {

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
                    <CartItem actions={false} />
                    <OrderInformation />
                </STabPanel>
            </STabs>
        </Container>
    )
}