import { MobileNumberCamp } from "../../components/AddNewAddress/AddressForm/MobileNumberCamp/MobileNumberCamp";
import { Container, H1, H2, P, Wrapper } from "./style";
import Wave from "react-wavify";
import { BlueButton } from "../../components/Buttons/BlueButton/BlueButton";

export function PhoneVerification() {
    return (
        <Container>
            <Wrapper>
                <H1>Welcome to Coral</H1>
                <H2>Enter your phone number</H2>
                <form style={{ width: "80%" }} action="">
                    <MobileNumberCamp campName="Number" />
                    <P>A 4 digit code will be sent to this number.</P>
                    <BlueButton text="Next" />
                    <div id="recaptcha-container"></div>
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