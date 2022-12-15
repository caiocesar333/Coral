import { Container, H2, InputDiv, P, Wrapper } from "./style";
import Wave from "react-wavify";
import { BlueButton } from "../../components/Buttons/BlueButton/BlueButton";
import { ErrorSpan } from "../PhoneVerification/style";

export function CodeVerification() {
    return (
        <Container>
            <Wrapper>
                <H2>Enter OTP</H2>
                <P>A 4 digit codewas sent to your number.</P>
                <form style={{ }} action="">
                    <div style={{ width: "80%", display: "flex", gap: "25px",marginBottom:"25px" }} >
                        <InputDiv>
                            <input maxLength={1} style={{ width: "100%", height: "100%", textAlign: "center", border: "none", outline: "none", background: "#f1f1f1" }} />
                        </InputDiv>
                        <InputDiv>
                            <input maxLength={1} style={{ width: "100%", height: "100%", textAlign: "center", border: "none", outline: "none", background: "#f1f1f1" }} />
                        </InputDiv>
                        <InputDiv>
                            <input maxLength={1} style={{ width: "100%", height: "100%", textAlign: "center", border: "none", outline: "none", background: "#f1f1f1" }} />
                        </InputDiv>
                        <InputDiv>
                            <input maxLength={1} style={{ width: "100%", height: "100%", textAlign: "center", border: "none", outline: "none", background: "#f1f1f1" }} />
                        </InputDiv>
                    </div>
                    <button className="blue-button">Next</button>
                </form>
                <P>Didn’t recieve the code? Request again</P>
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