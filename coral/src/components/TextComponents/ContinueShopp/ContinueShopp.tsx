import { P } from "./style";


export function ContinueShopp(){

    const redirect = ()=>{
        window.location.href = "/handbags"
    }

    return(
        <P onClick={redirect}>Continue Shopping</P>
    )
}