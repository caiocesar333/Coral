import { Button, Img } from "./style";
import arrowButton from "../../assets/arrowB.svg"

export interface ArrowButtonProps{
    children?: string,
    color?: string,
    bg?: string,
    filter?: string
}

export function ArrowButton({children, color, bg, filter}: ArrowButtonProps){
    return(
        <Button color={color} bg={bg}>
            <Img filter={filter} src={arrowButton}/>
        </Button>
    )
}