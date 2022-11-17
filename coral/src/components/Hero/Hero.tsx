import { Container, Img } from "./style";
import HeroImg from "../../assets/hero.png"

export function Hero(){
    return(
        <Container>
            <Img src={HeroImg}></Img>
        </Container>
    )
}