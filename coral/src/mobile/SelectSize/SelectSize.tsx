import { ProdDescMobile } from "../ProdDescMobile/ProdDescMobile";
import { Container, Img, Sizes } from "./style";
import size7 from "../../assets/Mobile/Size/7.svg"
import size8 from "../../assets/Mobile/Size/8.svg"
import size9 from "../../assets/Mobile/Size/9.svg"
import size10 from "../../assets/Mobile/Size/10.svg"

export function SelectSize(){
    return(
        <Container>
            <ProdDescMobile title="Select Size (UK Size)" arrow={false}/>
            <Sizes>
                <Img src={size7}></Img>
                <Img src={size8}></Img>
                <Img src={size9}></Img>
                <Img src={size10}></Img>
            </Sizes>
        </Container>
    )
}