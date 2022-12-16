import { Button, P } from "./style";

export interface SmallWhiteButtonProps{
    text:string,
    img:string
}

export function SmallWhiteButton({text,img}:SmallWhiteButtonProps) {

    const redirect =()=>{
        localStorage.clear()
        window.location.href = "/signup"
    }

    return(
        <Button onClick={redirect}>
            {img ? <img alt="" src={img}></img>
            :<></>
            }
            <P>{text}</P>
        </Button>
    )
}