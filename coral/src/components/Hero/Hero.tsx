import { Button, Carry, Container, H1, H3, Img, P, Wrapper } from "./style";
import HeroImg from "../../assets/hero.png"
import Arrow from "../../assets/arrow.svg"

export function Hero() {
    return (
        <Container>
            <Img src={HeroImg}></Img>
            <Wrapper>
                <Carry>
                    <H1>Carry your Funk</H1>
                    <H3>Trendy handbags collection for your party animal</H3>
                    <Button>
                        <img src={Arrow} alt="" />
                        <P>See more</P>
                    </Button>
                </Carry>
            </Wrapper>
        </Container>
    )
}