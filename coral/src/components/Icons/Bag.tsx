import BagIcon from "../../assets/bag.svg"
import { Img } from "./style"

export interface BagProps{
    children?: string
}

export function Bag( {children}: BagProps){
    return(
        <Img width="24" src={BagIcon} alt={children} />
    )
}