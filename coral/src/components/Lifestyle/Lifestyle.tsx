import { Container, Img } from "./style";
import lifestyle from "../../assets/actionBanners/lifestyle.png"
import { SkinFace } from "../SkinFace/SkinFace";

export function Lifestyle(){

    return(
        <Container>
            <Img src={lifestyle}></Img>
            <SkinFace/>
        </Container>
    )

}