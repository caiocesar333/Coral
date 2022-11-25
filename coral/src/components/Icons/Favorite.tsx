import { useState } from "react"
import Wishlist from "../../assets/wishlist.svg"
import star from "../../assets/star.svg";
import { Img } from "./style"
export interface FavoriteProps{
    children?: string
}


export function Favorite({children}: FavoriteProps) {
    const [favorite, setfavorite] = useState(true)

    const favoriteProd = () =>{
        setfavorite(prev =>!prev)
    }
    return (
        <Img onClick={favoriteProd} width="24" src={favorite
            ?Wishlist
            :star
        } alt="Wishlist" />
    )
}