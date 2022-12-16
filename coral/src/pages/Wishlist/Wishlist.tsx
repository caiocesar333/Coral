import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { PageLabel } from "../../components/TextComponents/PageLabel/PageLabel";
import { PageTitle } from "../../components/TextComponents/PageTitle/PageTitle";
import { UserMenu } from "../../components/UserMenu/UserMenu";
import { WishContent } from "../../components/WishContent/WishContent";
import { Container, Wrapper } from "./style";


export function Wishlist(){

    return(
        <Container>
            <Navbar/>
            <PageLabel from="Home" to="User Profile" />
            <PageTitle title="Wishlist" button={false}/>
            <Wrapper>
                <UserMenu/>
                <WishContent/>
            </Wrapper>
            <Footer/>
        </Container>
    )
}