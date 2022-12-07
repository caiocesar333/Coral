import { IdOptions } from "./IdOptions/IdOptions";
import { Container } from "./style";

import googlePay from "../../../assets/payment/googlePay.svg"
import phonePe from "../../../assets/payment/phonePe.svg"
import payTm from "../../../assets/payment/payTm.svg"

export function IdWrapper() {
    return(
        <Container>
            <IdOptions  img={googlePay} name="Google Pay" placeholder="Enter your UPI Id"/>
            <IdOptions  img={phonePe} name="Phone Pe" placeholder="Enter your phone number"/>
            <IdOptions  img={payTm} name="Pay Tm" placeholder="Enter your Id number"/>
        </Container>
    )
}