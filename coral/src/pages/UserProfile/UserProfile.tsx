import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { PageLabel } from "../../components/TextComponents/PageLabel/PageLabel";
import { PageTitle } from "../../components/TextComponents/PageTitle/PageTitle";
import { UserContent } from "../../components/UserContent/UserContent";
import { UserMenu } from "../../components/UserMenu/UserMenu";
import { Container, Wrapper } from "./style";


export function UserProfile(){

    const redirect =()=>{
        if (localStorage.getItem("993707525")!=="638c61b80918fe663eee71ed") {
            window.location.href = "/signup"
        }
        else console.log("tudo ok")
    }
    return(
        <Container onLoad={redirect}>
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