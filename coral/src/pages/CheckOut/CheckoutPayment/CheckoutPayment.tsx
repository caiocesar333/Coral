import { OrderSummary } from "../../../components/CartContent/OrderSummary/OrderSummary";
import { ContactInformation } from "../../../components/ContactInformation/ContactInformation";
import { Footer } from "../../../components/Footer/Footer";
import { Navbar } from "../../../components/Navbar/Navbar";
import { NavgationCheckout } from "../../../components/NavigationChekout/NavgationCheckout";
import { Payment } from "../../../components/Payment/Payment";
import { PageLabel } from "../../../components/TextComponents/PageLabel/PageLabel";
import { PageTitle } from "../../../components/TextComponents/PageTitle/PageTitle";
import { FormsDiv } from "../style";
import { Container, Wrapper } from "./style";


export function CheckoutPayment() {
    return (
        <Container>
            <Navbar />
            <PageLabel from="Home" to="Payment" />
            <PageTitle title="Payment" />
            <Wrapper>
                <FormsDiv>
                    <ContactInformation />
                    <Payment />
                    <NavgationCheckout />
                </FormsDiv>
                <OrderSummary />
            </Wrapper>
            <Footer />
        </Container>
    )
}