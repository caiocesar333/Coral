import  profile  from "../../assets/profile.svg";
import { Img } from "./style";

export interface ProfileProps{
    children?: string
}


export function Profile({children}: ProfileProps){
    return(
        <Img width="24" src={profile} alt="" />
    )
}