import { Blue } from "./style";


export interface TextButtonBlueProps{
    text:string
}

export function TextButtonBlue({text}:TextButtonBlueProps ) {
    return(
        <Blue>{text}</Blue>
    )
}