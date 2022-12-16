import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { ReviewTab } from "../../components/ReviewTab/ReviewTab";
import { PageLabel } from "../../components/TextComponents/PageLabel/PageLabel";
import { PageTitle } from "../../components/TextComponents/PageTitle/PageTitle";
import { UserMenu } from "../../components/UserMenu/UserMenu";
import { Container, Wrapper } from "./style";


export function MyReviews(){

    return(
        <Container>
            <Navbar/>
            <PageLabel from="Home" to="Home" andTo="My Reviews"/>
            <PageTitle title="My Reviews" button={false} search={false}/>
            <Wrapper>
                <UserMenu/>
                <ReviewTab/>
            </Wrapper>
            <Footer/>
        </Container>
    )
}