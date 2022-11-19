import { Container, Wrapper, Img } from "./style";
import {Carry} from "../../components/Carry/Carry"

export interface HeroProps{
    children?: string
    title?: string,
    description?: string,
    image: string,
    carry: boolean
}

export function Hero({title, description, image, carry}: HeroProps) {

    return (
        <Container>
            <Img src={image}></Img>
            <Wrapper>
                <Carry carry={carry} title={title} description={description} ></Carry>
            </Wrapper>
        </Container>
    )
}