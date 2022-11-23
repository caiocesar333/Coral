import { Container, Img } from "./style";
import makeup from "../../assets/Mobile/Makeup/makeup.png"
import { SkinFaceMobile } from "../SkinFaceMobile/SkinFaceMobile";

export function LifestyleMobile() {
    return (
        <Container>
            <Img src={makeup} />
            <SkinFaceMobile/>
        </Container>
    )
}