import { Container, Img } from "./style";
import arrowLeft from "../../assets/arrowLeft.svg"
import arrowRight from "../../assets/arrowRight.svg"
import slide from "../../assets/products/slide1.png"


export function ProductSlide() {
    return (
        <Container>
            <Img src={arrowLeft} />
            <Img src={slide} />
            <Img src={slide} />
            <Img src={slide} />
            <Img src={slide} />
            <Img src={arrowRight} />
        </Container>
    )
}