import { Sections } from "./Sections/Sections";
import { Container } from "./style";
import personal from "../../assets/Mobile/Sections/personal.png"
import handbag from "../../assets/Mobile/Sections/handbag.png"
import watches from "../../assets/Mobile/Sections/watches.png"
import glasses from "../../assets/Mobile/Sections/glasses.png"


export function SectionsMobile(){
    return(
        <Container>
            <Sections url="/personal" image={personal} />
            <Sections url="/handbags" image={handbag} />
            <Sections url="/watches" image={watches} />
            <Sections url="/glasses" image={glasses} />
        </Container>
    )
}