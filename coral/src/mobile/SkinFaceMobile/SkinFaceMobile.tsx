import { Container, Img } from "./style";
import facepacks from "../../assets/Mobile/Makeup/facepacks.png"
import skincare from "../../assets/Mobile/Makeup/skincare.png"

export function SkinFaceMobile(){
    return(
        <Container>
            <Img src={skincare}></Img>
            <Img src={facepacks}></Img>
        </Container>
    )
}