import { Container, Wrapper, Img, H2, P, ProductDiv } from "./style";
import arrow from "../../assets/Mobile/arrowCategory.svg"
import { RowMobile } from "../RowMobile/RowMobile";

import image from "../../assets/Mobile/Products/Handbags/1.png"
import image2 from "../../assets/Mobile/Products/Handbags/2.png"
import image3 from "../../assets/Mobile/Products/Handbags/3.png"
import image4 from "../../assets/Mobile/Products/Handbags/4.png"
import image5 from "../../assets/Mobile/Products/Handbags/5.png"
import image6 from "../../assets/Mobile/Products/Handbags/1.png"

export function CategoryLabel() {
    const produtos = [{
        image: image,
        name: "Grande",
        description: "Blossom Pouch",
        price: "$39.49"
    },
    {
        image: image2,
        name: "Coach",
        description: "Leather Coach Bag",
        price: "$54.69"
    },
    {
        image: image3,
        name: "Boujee",
        description: "Baker Solid Black...",
        price: "$56.49"
    },
    {
        image: image4,
        name: "Grande",
        description: "Blossom Pouch",
        price: "$39.49"
    },
    {
        image: image5,
        name: "Coach",
        description: "Leather Coach Bag",
        price: "$39.49"
    },
    {
        image: image6,
        name: "Boujee",
        description: "Baker Solid Black...",
        price: "$56.49"
    },
    
    ]
    return (
        <Container>
            <Wrapper>
                <Img src={arrow} />
                <H2>Handbags</H2>
            </Wrapper>
            <P>255 Products</P>
            <ProductDiv>
                {produtos.map((produto, index) => (
                    <RowMobile image={produto.image} name={produto.name}
                        description={produto.description} price={produto.price} category={true}></RowMobile>
                ))}
            </ProductDiv>
        </Container>
    )
}