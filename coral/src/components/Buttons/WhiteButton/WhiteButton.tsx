import { Button, P } from "./style";

export interface WhiteButtonProps{
    text:string
}

export function WhiteButton({text}:WhiteButtonProps) {
    return(
        <Button>
            <P>{text}</P>
        </Button>
    )
}