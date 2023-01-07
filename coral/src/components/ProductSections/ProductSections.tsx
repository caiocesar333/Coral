import { Sections } from "../Sections/Sections";
import { Container } from "./style";
import personal from "../../assets/handpicked/personal.png"
import handbag from "../../assets/handpicked/handbag.png"
import watches from "../../assets/handpicked/watches.png"
import glasses from "../../assets/handpicked/glasses.png"
import { useParams } from "react-router-dom";

export interface ProductSectionsProps{
    children?: string
    
}



export function ProductSections(){
    
    const {userId} = useParams()    

    return(
        <Container>
            <Sections userId="" url="NotFound" image={personal} title = "Personal Care"/>
            <Sections userId={userId} url={"handbags"} image={handbag} title = "Handbags"/>
            <Sections userId="" url="NotFound" image={watches} title = "Wrist Watches"/>
            <Sections userId="" url="NotFound" image={glasses} title = "Sun Glasses"/>
        </Container>
    )
}