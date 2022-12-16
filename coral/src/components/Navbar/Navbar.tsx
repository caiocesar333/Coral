import { Wrapper, UserSection, Container, IconWrapper } from "./style";
import { Logo } from "../Logo/Logo";
import { NavCategory } from "../NavCategory/NavCategory";
import { SearchBar } from "../SearchBar/SearchBar";
import { Favorite } from "../Icons/Favorite";
import { Profile } from "../Icons/Profile";
import { Bag } from "../Icons/Bag";
import { useState } from "react";
export function Navbar() {

    const [showModal, setShowModal] = useState(false)

    return (
        <Container>
            <Wrapper>
                <Logo />    
                <NavCategory />
            </Wrapper>
            <UserSection>
                <SearchBar setShowModal={setShowModal} showModal={showModal} 
                placeholder="Search for products or brands....."/>
                <IconWrapper>
                    <Favorite/>
                    <Profile/>
                    <Bag/>
                </IconWrapper>        
            </UserSection>
        </Container>
    )
}