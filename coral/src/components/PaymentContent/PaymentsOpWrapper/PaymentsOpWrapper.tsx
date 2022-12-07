import upi from "../../../assets/payment/upi.svg"
import applePay from "../../../assets/payment/applePay.svg"
import amazonPay from "../../../assets/payment/amazonPay.svg"
import creditCard from "../../../assets/payment/creditCard.svg"
import { Container } from "./style"
import { PaymentOptions } from "./PaymentOptions/PaymentOptions"

export function PaymentsOpWrapper() {
    return(
        <Container>
            <PaymentOptions  img={upi}/>
            <PaymentOptions  img={applePay}/>
            <PaymentOptions  img={amazonPay}/>
            <PaymentOptions  img={creditCard}/>
        </Container>
    )
}