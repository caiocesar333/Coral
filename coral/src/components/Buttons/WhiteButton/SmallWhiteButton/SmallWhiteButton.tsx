import { Button, P } from "./style";

export interface SmallWhiteButtonProps{
    text:string
}

export function SmallWhiteButton({text}:SmallWhiteButtonProps) {
    return(
        <Button>
            <P>{text}</P>
        </Button>
    )
}