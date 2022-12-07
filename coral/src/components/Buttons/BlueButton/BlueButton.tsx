import { Button, P } from "./style";

export interface BlueButtonProps{
    text:string,
    order?:boolean,
    setOrder?:  React.Dispatch<React.SetStateAction<boolean>>,
}

export function BlueButton({text,order,setOrder}:BlueButtonProps) {
    // const orderPlaced = () => {
    //     setOrder(!order)
    // }
    
    return(
        <Button //onClick={()=>{orderPlaced()}}//
            >
            <P>{text}</P>
        </Button>
    )
}