import { useParams } from "react-router-dom";
import { DinamicProduct } from "../../DinamicProduct/DinamicProduct";
import { Label } from "../../Label/Label";
import { Navbar } from "../../Navbar/Navbar";
import { Container } from "../style";


export function ProductPage(){
    
    const {productName} = useParams();
    
    return(
        <Container>
            <Navbar></Navbar>
            <Label productName={productName} ></Label>
            <DinamicProduct></DinamicProduct>
        </Container>
    )
}