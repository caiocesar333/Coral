import { Container, Face, Img, Skin } from "./style";
import skin from "../../assets/actionBanners/skin.png"
import face from "../../assets/actionBanners/face.png"
import { ArrowButton } from "../ArrowButton/ArrowButton";



export function SkinFace() {
    return (
        <Container>
            <Skin>
                <Img src={skin}></Img>
                <ArrowButton 
                color="#A53F64" 
                bg="white"/>
            </Skin>
            <Face>
                <Img src={face}></Img>
                <ArrowButton color="#1B4B66" filter="invert(19%) sepia(25%) saturate(307%) hue-rotate(230deg) brightness(50%) contrast(88%);" 
                bg="#c2cbd1"/>
            </Face>
        </Container>
    )
}