import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { NavigationNotFound } from "../../components/NavigationNotFound/NavigationNotFound";
import { PageLabel } from "../../components/TextComponents/PageLabel/PageLabel";
import { PageTitle } from "../../components/TextComponents/PageTitle/PageTitle";
import { UserMenu } from "../../components/UserMenu/UserMenu";
import { Container, Wrapper } from "./style";


export function NotFoundInUser(){

    return(
        <Container>
            <Navbar/>
            <PageLabel from="Home" to="User Profile" />
            <PageTitle title="Personal Information" button={false}/>
            <Wrapper>
                <UserMenu/>
                <NavigationNotFound/>
            </Wrapper>
            <Footer/>
        </Container>
    )
}