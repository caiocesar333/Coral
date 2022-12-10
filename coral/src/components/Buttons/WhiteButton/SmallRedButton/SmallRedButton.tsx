import { Button, P } from "./style";

import deleteIcon from "../../../../assets/deleteSm.svg"

export interface SmallRedButtonProps{
    text:string
}

export function SmallRedButton({text}:SmallRedButtonProps) {
    return(
        <Button>
            <img alt="" src={deleteIcon}></img>
            <P>{text}</P>
        </Button>
    )
}