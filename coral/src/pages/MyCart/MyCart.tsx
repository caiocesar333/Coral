import { OrderSummary } from "../../components/CartContent/OrderSummary/OrderSummary";
import { ProductTable } from "../../components/CartContent/ProductTable/ProductTable";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { PageLabel } from "../../components/TextComponents/PageLabel/PageLabel";
import { PageTitle } from "../../components/TextComponents/PageTitle/PageTitle";
import { Container, Wrapper } from "./style";


export function MyCart(){
    return(
        <Container>
            <Navbar></Navbar>
            <PageLabel from="Home" to="My cart"/>
            <PageTitle title="My Cart"/>
            <Wrapper>
                <ProductTable/>
                <OrderSummary/>
            </Wrapper>
                <Footer/>
        </Container>
    )
}