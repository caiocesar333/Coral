import { Button, Container, H1, H3, P, } from "./style";
import Arrow from "../../assets/arrow.svg"

export interface CarryProps{
    children?: string
    title?: string,
    description?: string,
    carry:boolean
}


export function Carry({title, description,carry}: CarryProps) {
    const redirectError = ()=>{
        window.location.href = "/NotFound"
    }
    if (carry) {
        return (
            <Container>
                <H1>{title}</H1>
                <H3>{description}</H3>
                <Button onClick={redirectError}>
                    <img src={Arrow} alt="" />
                    <P>See more</P>
                </Button>
            </Container>
        )
    } else return (<></>)
}