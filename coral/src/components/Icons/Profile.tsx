import { useParams } from "react-router-dom";
import  profile  from "../../assets/profile.svg";
import { Img, } from "./style";

export interface ProfileProps{
    children?: string
}


export function Profile({children}: ProfileProps){

    const {userId} = useParams()

    const redirect = ()=>{
        window.location.href = `/${userId}`
    }

    return(
        <Img onClick={redirect} width="24" src={profile} alt="" />
    )
}