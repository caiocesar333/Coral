import { useParams } from "react-router-dom";
import { Button, P } from "./style";

export interface BlueButtonProps{
    text:string,
    order?:boolean,
    setOrder?:  React.Dispatch<React.SetStateAction<boolean>>,
    getStarted?: boolean,
    wishlist?:boolean
}

export function BlueButton({text,order,setOrder,getStarted,wishlist}:BlueButtonProps) {
    
    const {userId} = useParams()

    const redirect = () => {
        if(getStarted){
            window.location.href = "signup/register"
        } else if(wishlist){
            window.location.href = `/${userId}/handbags/1`
        }
    }


    return (
        <Button onClick={redirect}
        >
            <P>{text}</P>
        </Button>
    )
}