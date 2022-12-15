import { OrderDetailsTab } from "../../components/DetailsTab/OrderDetailsTab";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { OrderInformation } from "../../components/OrderInformation/OrderInformation";
import { PageLabel } from "../../components/TextComponents/PageLabel/PageLabel";
import { PageTitle } from "../../components/TextComponents/PageTitle/PageTitle";
import { UserMenu } from "../../components/UserMenu/UserMenu";
import { Container, Wrapper } from "./style";


export function OrderDetails(){

    return(
        <Container>
            <Navbar/>
            <PageLabel from="Home" to="User Profile" andTo="order #123414" />
            <PageTitle title="Order #123414" button={false}/>
            <Wrapper>
                <UserMenu/>
                <OrderDetailsTab/>
            </Wrapper>
            <Footer/>
        </Container>
    )
}