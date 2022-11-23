import { Img } from "./style";

export interface BannerMobileProps{
    img:string
}

export function BannerMobile({img}:BannerMobileProps){
    return(
        <Img src={img}></Img>
    )
}