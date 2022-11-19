import { Container, Wrapper, Img } from "./style";
import {Carry} from "../../components/Carry/Carry"

export interface HeroProps{
    children?: string
    title?: string,
    description?: string,
    image: string
}

export function Hero({title, description, image}: HeroProps) {

    return (
        <Container>
            <Img src={image}></Img>
            <Wrapper>
                <Carry title="Carry Your Funk" description="Trendy handbags collection for your party animal" ></Carry>
            </Wrapper>
        </Container>
    )
}