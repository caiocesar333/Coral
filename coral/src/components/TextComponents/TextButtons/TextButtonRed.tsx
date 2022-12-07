import { Red } from "./style";

export interface TextButtonRedProps{
    text:string
}

export function TextButtonRed({text}:TextButtonRedProps ) {
    return(
        <Red>{text}</Red>
    )
}