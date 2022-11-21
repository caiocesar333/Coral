import BagIcon from "../../assets/bagWhite.svg"
import { Img } from "./style"

export interface BagWhiteProps{
    children?: string
}

export function BagWhite( {children}: BagWhiteProps){
    return(
        <Img width="24" src={BagIcon} alt={children} />
    )
}