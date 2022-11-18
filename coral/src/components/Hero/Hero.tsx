import { Button, Carry, Container, H1, H3, Img, P, Wrapper } from "./style";
import HeroImg from "../../assets/hero.png"
import Arrow from "../../assets/arrow.svg"

export interface HeroProps{
    children?: string
    title: string,
    description: string
}

export function Hero({title, description}: HeroProps) {

    return (
        <Container>
            <Img src={HeroImg}></Img>
            <Wrapper>
                <Carry>
                    <H1>{title}</H1>
                    <H3>{description}</H3>
                    <Button>
                        <img src={Arrow} alt="" />
                        <P>See more</P>
                    </Button>
                </Carry>
            </Wrapper>
        </Container>
    )
}