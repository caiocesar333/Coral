import { Container, P, U } from "./style";

export interface BannerProps{
    children?: string;
    delay?: string
}

export function Banner({delay}:BannerProps) {
    return (
        <Container>
            <P>{delay} <U>here</U></P>
        </Container>
    )
}