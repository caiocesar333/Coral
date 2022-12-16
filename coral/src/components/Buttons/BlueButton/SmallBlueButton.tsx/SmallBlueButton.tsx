import { Button, P } from "./style";

export interface SmallBlueButtonProps {
    text: string,
    order?: boolean,
    setOrder?: React.Dispatch<React.SetStateAction<boolean>>,
    img?: string,
}

export function SmallBlueButton({ text, order, setOrder,img }: SmallBlueButtonProps) {
 

    return (
        <Button 
        >   {img ? <img alt="" src={img}></img>
            :<></>
            }
            <P>{text}</P>
        </Button>
    )
}