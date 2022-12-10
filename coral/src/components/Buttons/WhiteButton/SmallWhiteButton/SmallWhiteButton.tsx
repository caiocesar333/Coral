import { Button, P } from "./style";

export interface SmallWhiteButtonProps{
    text:string,
    img:string
}

export function SmallWhiteButton({text,img}:SmallWhiteButtonProps) {
    return(
        <Button>
            {img ? <img alt="" src={img}></img>
            :<></>
            }
            <P>{text}</P>
        </Button>
    )
}