import { Button, Container, H1, H3, P, } from "./style";
import Arrow from "../../assets/arrow.svg"

export interface CarryProps{
    children?: string
    title?: string,
    description?: string,
}


export function Carry({title, description}: CarryProps) {
    return (
        <Container>
            <H1>{title}</H1>
            <H3>{description}</H3>
            <Button>
                <img src={Arrow} alt="" />
                <P>See more</P>
            </Button>
        </Container>
    )
}