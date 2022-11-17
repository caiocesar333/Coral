import { Wrapper, UserSection, Container, IconWrapper } from "./style";
import { Logo } from "../Logo/Logo";
import { NavCategory } from "../NavCategory/NavCategory";
import { SearchBar } from "../SearchBar/SearchBar";
import { Favorite } from "../Icons/Favorite";
import { Profile } from "../Icons/Profile";
import { Bag } from "../Icons/Bag";
export function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Logo />    
                <NavCategory />
            </Wrapper>
            <UserSection>
                <SearchBar/>
                <IconWrapper>
                    <Favorite/>
                    <Profile/>
                    <Bag/>
                </IconWrapper>        
            </UserSection>
        </Container>
    )
}