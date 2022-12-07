import { IdWrapper } from "./IdWrapper/IdWrapper";
import { PaymentsOpWrapper } from "./PaymentsOpWrapper/PaymentsOpWrapper";
import { Container } from "./style";


export function PaymentContent() {
    return(
        <Container>
            <PaymentsOpWrapper/>
            <IdWrapper/>
        </Container>
    )
}