import { MobileNumberCamp } from "../../components/AddNewAddress/AddressForm/MobileNumberCamp/MobileNumberCamp";
import { Container, ErrorSpan, H1, H2, P, Wrapper } from "./style";
import Wave from "react-wavify";
import "../../styles/global.css"
import { useState } from "react";

import { ValidateRegisterPhone } from "../../scripts/ValidateRegisterPhone";

export function PhoneVerification() {

    const [phone, setPhone] = useState("")
    const [error, setError] = useState(false)

    return (
        <Container>
            <Wrapper>
                <H1>Welcome to Coral</H1>
                <H2>Enter your phone number</H2>
                <form style={{ width: "80%" }} onSubmit={(e) => { e.preventDefault(); ValidateRegisterPhone(phone,setError ) }}>
                    <MobileNumberCamp phone={phone} setPhone={setPhone} campName="Number" />
                    <P>A 4 digit code will be sent to this number.</P>
                    <button className="blue-button">Next</button>
                    {error ? <ErrorSpan>Número com caractéres nao permitidos</ErrorSpan> : <></>}
                </form>
            </Wrapper>
            <Wave fill="#1b4b66"
                paused={false}
                options={{
                    height: 0,
                    amplitude: 30,
                    speed: 0.2,
                    points: 5
                }} />
        </Container>
    )
}