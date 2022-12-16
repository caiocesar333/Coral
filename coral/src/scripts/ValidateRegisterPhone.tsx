

export function ValidateRegisterPhone(phone: string, setError: React.Dispatch<React.SetStateAction<boolean>>) {

    function isNumeric(val: string) {
        return /^-?\d+$/.test(val);
    }

    if (window.location.href==="/signup/register/" ||(isNumeric(phone))) {
        console.log(phone)
        window.location.href=`/signup/register/${phone}`

    } else {
        return (
            setError(true)
        )
    }

    localStorage.clear()
    localStorage.setItem(phone, "638c61b80918fe663eee71ed");
}