import { useParams } from "react-router-dom";
import { Button, P } from "./style";

export interface BlueButtonProps{
    text:string,
    order?:boolean,
    setOrder?:  React.Dispatch<React.SetStateAction<boolean>>,
    getStarted?: boolean,
    wishlist?:boolean,
    address?:boolean,
    next?: boolean
}

export function BlueButton({text,order,setOrder,getStarted,wishlist,address,next}:BlueButtonProps) {
    
    const {userId} = useParams()

    const redirect = () => {
        if(getStarted){
            window.location.href = "signup/register"
        } else if(wishlist){
            window.location.href = `/${userId}/handbags/1`
        } else if(address){
            window.location.href = `/NotFound`
        } else if(order){
            window.location.href = `/checkout`
        }else if(next){
            window.location.href = `/payment`
        }
        
    }


    return (
        <Button onClick={redirect}
        >
            <P>{text}</P>
        </Button>
    )
}