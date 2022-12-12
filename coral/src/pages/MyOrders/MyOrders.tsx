import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { OrderTab } from "../../components/OrderTab/OrderTab";
import { PageLabel } from "../../components/TextComponents/PageLabel/PageLabel";
import { PageTitle } from "../../components/TextComponents/PageTitle/PageTitle";
import { UserMenu } from "../../components/UserMenu/UserMenu";
import { Container, Wrapper } from "./style";


export function MyOrders(){

    return(
        <Container>
            <Navbar/>
            <PageLabel from="Home" to="Home" andTo="My Orders"/>
            <PageTitle title="My Orders" button={false} search={true}/>
            <Wrapper>
                <UserMenu/>
                <OrderTab/>
            </Wrapper>
            <Footer/>
        </Container>
    )
}