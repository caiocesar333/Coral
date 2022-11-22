import { AddHome } from "../Icons/AddHome";
import { DropDown } from "../Icons/DropDown";
import { Notification } from "../Icons/Notification";
import { Search } from "../Icons/Search";
import { Container, H4, IconWrapper, MenuDiv } from "./style";

export function NavbarMobile() {

    return (
        <Container>
            <MenuDiv>
                <DropDown />
                <H4>Home</H4>
            </MenuDiv>
            <IconWrapper>
                <AddHome />
                <Search />
                <Notification />
            </IconWrapper>
        </Container>
    )
}