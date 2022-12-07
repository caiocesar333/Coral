import { useState } from "react";
import { AddNewAddress } from "../../components/AddNewAddress/AddNewAddress";
import { OrderSummary } from "../../components/CartContent/OrderSummary/OrderSummary";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { NavgationCheckout } from "../../components/NavigationChekout/NavgationCheckout";
import { SelectPayment } from "../../components/SelectPayment/SelectPayment";
import { PageLabel } from "../../components/TextComponents/PageLabel/PageLabel";
import { PageTitle } from "../../components/TextComponents/PageTitle/PageTitle";
import { Container, FormsDiv, Wrapper } from "./style";


export function CheckOut() {
    const [order, setOrder] = useState(false);

    const orderPlaced = () => {
        setOrder(!order)
    }
    return (
        <Container>
            <Navbar></Navbar>
            <PageLabel from="Home" to="CheckOut" />
            <PageTitle title="Checkout" />
            <Wrapper>
                <FormsDiv>
                    <AddNewAddress text="Add New Address" />
                    <SelectPayment />
                    <NavgationCheckout/>
                </FormsDiv>
                <OrderSummary />
            </Wrapper>
            <Footer />
        </Container>
    )
}