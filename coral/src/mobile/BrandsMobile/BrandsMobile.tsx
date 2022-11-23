
import { Container, Img } from "./style";
import zara from "../../assets/Mobile/Brands/zara.png"
import dg from "../../assets/Mobile/Brands/dg.png"
import hm from "../../assets/Mobile/Brands/hm.png"
import chanel from "../../assets/Mobile/Brands/chanel.png"
import prada from "../../assets/Mobile/Brands/prada.png"
import biba from "../../assets/Mobile/Brands/biba.png"

export function BrandsMobile() {
    return (
        <Container>
            <Img alt="zara" src={zara}></Img>
            <Img alt="dg" src={dg}></Img>
            <Img alt="hm" src={hm}></Img>
            <Img alt="chanel" src={chanel}></Img>
            <Img alt="prada" src={prada}></Img>
            <Img alt="biba" src={biba}></Img>
        </Container>
    )
}