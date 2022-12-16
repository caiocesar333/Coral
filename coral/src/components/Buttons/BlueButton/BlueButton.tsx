import { Button, P } from "./style";

export interface BlueButtonProps {
    text: string,
    order?: boolean,
    setOrder?: React.Dispatch<React.SetStateAction<boolean>>,
    getStarted?: boolean
}

export function BlueButton({ text, order, setOrder, getStarted }: BlueButtonProps) {


    const redirect = () => {
        if(getStarted){
            window.location.href = "register"
        }
    }


    return (
        <Button onClick={redirect}
        >
            <P>{text}</P>
        </Button>
    )
}