import  profile  from "../../assets/profile.svg";
import { Img, } from "./style";

export interface ProfileProps{
    children?: string
}


export function Profile({children}: ProfileProps){

    const redirect = ()=>{
        window.location.href = "/user"
    }

    return(
        <Img onClick={redirect} width="24" src={profile} alt="" />
    )
}