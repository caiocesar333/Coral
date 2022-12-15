import { useEffect } from "react";
import { useLocation } from "react-router-dom"


export function ValidateRegisterPhone(phone: string, setError: React.Dispatch<React.SetStateAction<boolean>>) {

    function isNumeric(val: string) {
        return /^-?\d+$/.test(val);
    }

    if (window.location.href==="/signup/register/" ||(isNumeric(phone))) {
        console.log(phone)
        window.location.href="/signup/register/otp"

    } else {
        return (
            setError(true)
        )
    }

}