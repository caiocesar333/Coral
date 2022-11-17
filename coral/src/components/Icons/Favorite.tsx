import Wishlist from "../../assets/wishlist.svg"
import { Img } from "./style"

export interface FavoriteProps{
    children?: string
}


export function Favorite({children}: FavoriteProps) {
    return (
        <Img width="24" src={Wishlist} alt="Wishlist" />
    )
}