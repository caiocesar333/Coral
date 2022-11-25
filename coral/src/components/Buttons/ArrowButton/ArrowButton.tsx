import { Button, Img } from "./style";
import arrowButton from "../../../assets/arrowB.svg"

export interface ArrowButtonProps{
    children?: string,
    color?: string,
    bg?: string,
    filter?: string
}

export function ArrowButton({children, color, bg, filter}: ArrowButtonProps){
    const redirectError = ()=>{
        window.location.href = "/NotFound"
    }
    return(
        <Button onClick={redirectError} color={color} bg={bg}>
            <Img filter={filter} src={arrowButton}/>
        </Button>
    )
}