import { AddressContent } from "../../components/AddressContent/AddressContent";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { PageLabel } from "../../components/TextComponents/PageLabel/PageLabel";
import { PageTitle } from "../../components/TextComponents/PageTitle/PageTitle";
import { UserMenu } from "../../components/UserMenu/UserMenu";
import { Container, Wrapper } from "./style";


export function Address(){

    return(
        <Container>
            <Navbar/>
            <PageLabel from="Home" to="User Profile" />
            <PageTitle title="Address" button={false}/>
            <Wrapper>
                <UserMenu/>
                <AddressContent/>
            </Wrapper>
            <Footer/>
        </Container>
    )
}