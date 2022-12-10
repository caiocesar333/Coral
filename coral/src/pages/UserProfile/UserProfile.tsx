import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { PageLabel } from "../../components/TextComponents/PageLabel/PageLabel";
import { PageTitle } from "../../components/TextComponents/PageTitle/PageTitle";
import { UserContent } from "../../components/UserContent/UserContent";
import { UserMenu } from "../../components/UserMenu/UserMenu";
import { Container, Wrapper } from "./style";


export function UserProfile(){

    return(
        <Container>
            <Navbar/>
            <PageLabel from="Home" to="User Profile" />
            <PageTitle title="Personal Information" button={true}/>
            <Wrapper>
                <UserMenu/>
                <UserContent/>
            </Wrapper>
            <Footer/>
        </Container>
    )
}