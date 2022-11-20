import star from "../../assets/star.svg";
import { Container } from "./style";
import { StarImage } from "./style";

export interface StarProps {
    children?: string
}


export function Star({ children }: StarProps) {
    return (
        <Container>
            <StarImage src={star} alt="" />
            <StarImage src={star} alt="" />
            <StarImage src={star} alt="" />
            <StarImage src={star} alt="" />
            <StarImage src={star} alt="" />
        </Container>
    )
}