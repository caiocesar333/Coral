import { Sections } from "../Sections/Sections";
import { Container } from "./style";
import personal from "../../assets/handpicked/personal.png"
import handbag from "../../assets/handpicked/handbag.png"
import watches from "../../assets/handpicked/watches.png"
import glasses from "../../assets/handpicked/glasses.png"

export interface ProductSectionsProps{
    children?: string
    
}


export function ProductSections(){
    return(
        <Container>
            <Sections image={personal} title = "Personal Care"/>
            <Sections image={handbag} title = "Handbags"/>
            <Sections image={watches} title = "Wrist Watches"/>
            <Sections image={glasses} title = "Sun Glasses"/>
        </Container>
    )
}