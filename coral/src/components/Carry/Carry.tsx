import { Button, Container, H1, H3, P, } from "./style";
import Arrow from "../../assets/arrow.svg"

export interface CarryProps{
    children?: string
    title?: string,
    description?: string,
    carry:boolean
}


export function Carry({title, description,carry}: CarryProps) {
    if (carry) {
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
    } else return (<></>)
}