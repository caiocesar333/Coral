

export function ValidateRegisterOtp(state: {
    otp1: string;
    otp2: string;
    otp3: string;
    otp4: string;
}
    , setNonNumeric: React.Dispatch<React.SetStateAction<boolean>>
    , setInvalidOtp: React.Dispatch<React.SetStateAction<boolean>>
    , otpPhone:any) {

    function isNumeric(val: string) {
        return /^-?\d+$/.test(val);
    }

    const otpNumber = state.otp1 + state.otp2 + state.otp3 + state.otp4
    
    const userId = localStorage.getItem(otpPhone)

    if (isNumeric(otpNumber)) {
        if (otpNumber === "1234") {
            window.location.href = `/${userId}/personal`
        }
        else {
            setInvalidOtp(true)
            setNonNumeric(false)

        }
    } else {
        setNonNumeric(true)
        setInvalidOtp(false)
    }

}