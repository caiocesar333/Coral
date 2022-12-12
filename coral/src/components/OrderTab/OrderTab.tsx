import "../../styles/global.css"
import { Orders } from "./Orders/Orders";

import { Container, STab, STabList, STabPanel, STabs } from "./style";
import { TableColums } from "./TableColums/TableColums";


export function OrderTab(){

    return(
        <Container>
            <STabs  selectedTabClassName="active">
                <STabList>
                    <STab>Completed</STab>
                    <STab>Processing</STab>
                    <STab>Cancelled</STab>
                </STabList>
                <STabPanel>
                    <TableColums/>
                    <Orders/>
                    <Orders/>
                    <Orders/>
                    <Orders/>
                </STabPanel>
            </STabs>
        </Container>
    )
}