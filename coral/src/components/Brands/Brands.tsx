
import { Container, Img } from "./style";
import zara from "../../assets/brands/zara.png"
import dg from "../../assets/brands/dg.png"
import hm from "../../assets/brands/hm.png"
import chanel from "../../assets/brands/chanel.png"
import prada from "../../assets/brands/prada.png"
import biba from "../../assets/brands/biba.png"

export function Brands() {
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