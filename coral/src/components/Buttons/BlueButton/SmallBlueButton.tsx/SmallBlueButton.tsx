import { Button, P } from "./style";

export interface SmallBlueButtonProps {
    text: string,
    order?: boolean,
    setOrder?: React.Dispatch<React.SetStateAction<boolean>>,
    img?: string,
}

export function SmallBlueButton({ text, order, setOrder,img }: SmallBlueButtonProps) {
    // const orderPlaced = () => {
    //     setOrder(!order)
    // }

    return (
        <Button //onClick={()=>{orderPlaced()}}//
        >   {img ? <img alt="" src={img}></img>
            :<></>
            }
            <P>{text}</P>
        </Button>
    )
}