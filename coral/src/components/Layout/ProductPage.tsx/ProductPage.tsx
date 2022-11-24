import { useParams } from "react-router-dom";
import { DinamicProduct } from "../../DinamicProduct/DinamicProduct";
import { Label } from "../../Label/Label";
import { Navbar } from "../../Navbar/Navbar";
import { Container } from "../style";
// imports for Mobile Version

import MediaQuery from "react-responsive";
import { BackLabel } from "../../../mobile/BackLabel/BackLabel";
import { DinamicProdMobile } from "../../../mobile/DinamicProdMobile/DinamicProdMobile";

export function ProductPage() {

    const { productName, imgUrl } = useParams();

    return (<>
        <MediaQuery minWidth={1200}>
            <Container>
                <Navbar></Navbar>
                <Label productName={productName} ></Label>
                <DinamicProduct productName={productName} imgUrl={imgUrl} ></DinamicProduct>
            </Container>
        </MediaQuery>
        <MediaQuery maxWidth={500}>
            <BackLabel/>
            <DinamicProdMobile productName={productName}/>
        </MediaQuery>
    </>
    )
}