import { Container, H2, InputDiv, P, Wrapper } from "./style";
import Wave from "react-wavify";
import { useState } from "react";
import { ValidateRegisterOtp } from "../../scripts/ValidateRegisterOtp";
import { ErrorSpan } from "../PhoneVerification/style";
import { useParams } from "react-router-dom";

export function CodeVerification() {

    const {otpPhone} = useParams()

    const [state, setState] = useState({
        otp1:"",
        otp2:"",
        otp3:"",
        otp4:"",
    })

    const [nonNumeric, setNonNumeric] = useState(false)
    const [invalidOtp, setInvalidOtp] = useState(false)

    function handleChange(evt:any) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
        console.log(state)
      }

    return (
        <Container>
            <Wrapper>
                <H2>Enter OTP</H2>
                <P>A 4 digit code was sent to your number.</P>
                <form style={{ }} onSubmit={(e)=> {e.preventDefault(); ValidateRegisterOtp(state, setNonNumeric, setInvalidOtp, otpPhone)} }>
                    <div style={{ width: "80%", display: "flex", gap: "25px",marginBottom:"25px" }} >
                        <InputDiv>
                            <input name="otp1" value={state.otp1} onChange={handleChange}  maxLength={1} style={{ width: "100%", height: "100%", 
                            textAlign: "center", border: "none", outline: "none", background: "#f1f1f1" }} />
                        </InputDiv>
                        <InputDiv>
                            <input name="otp2" value={state.otp2} onChange={handleChange}  maxLength={1} style={{ width: "100%", height: "100%", 
                            textAlign: "center", border: "none", outline: "none", background: "#f1f1f1" }} />
                        </InputDiv>
                        <InputDiv>
                            <input name="otp3" value={state.otp3} onChange={handleChange}  maxLength={1} style={{ width: "100%", height: "100%", 
                            textAlign: "center", border: "none", outline: "none", background: "#f1f1f1" }} />
                        </InputDiv>
                        <InputDiv>
                            <input name="otp4" value={state.otp4} onChange={handleChange}  maxLength={1} style={{ width: "100%", height: "100%", 
                            textAlign: "center", border: "none", outline: "none", background: "#f1f1f1" }} />
                        </InputDiv>
                    </div>
                    <button className="blue-button">Next</button>
                    {nonNumeric ? <ErrorSpan>Invalid characters</ErrorSpan> : <></>}
                    {invalidOtp ? <ErrorSpan>Code is not valid </ErrorSpan> : <></>}
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