import { CartItem } from "../../CartItem/CartItem"
import { DropDown } from "../../DropDown/DropDown"
import { Container } from "./style"
import { TableLabel } from "./TableLabel/TableLabel"

export interface TableProps{
    children?: string
}

export function Table({children}:TableProps) {
    return(
        <Container>
            <TableLabel/>
            <CartItem/>
            <DropDown text="Apply Coupon Code"/>
        </Container>
    )
}