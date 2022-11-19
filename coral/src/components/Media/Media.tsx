import { Container, Img } from "./style";
import face from "../../assets/media/fb.svg"
import insta from "../../assets/media/insta.svg"
import twitter from "../../assets/media/twitter.svg"
import youtube from "../../assets/media/youtube.svg"

export function  Media(){
    return(
        <Container>
            <Img src={face} ></Img>
            <Img src={insta} ></Img>
            <Img src={twitter} ></Img>
            <Img src={youtube} ></Img>
        </Container>
    )
}