import { useParams } from "react-router-dom";
import { DinamicProduct } from "../../DinamicProduct/DinamicProduct";
import { Label } from "../../Label/Label";
import { Navbar } from "../../Navbar/Navbar";
import { Container } from "../style";


export function ProductPage(){
    
    const {productName, imgUrl} = useParams();
    
    return(
        <Container>
            <Navbar></Navbar>
            <Label productName={productName} ></Label>
            <DinamicProduct productName={productName} imgUrl ={imgUrl} ></DinamicProduct>
        </Container>
    )
}