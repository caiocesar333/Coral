import { LabelMobile } from "../LabelMobile/LabelMobile";
import { SectionsMobile } from "../SectionsMobile/SectionsMobile";
import { Container } from "./style";


export function HandpickedMobile(){
    return(
        <Container>
            <LabelMobile title="Handpicked Collections" viewAll={false}/>
            <SectionsMobile/>
        </Container>
    )
}