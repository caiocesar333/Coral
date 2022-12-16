import { Container, H3, Img, Item, P, PriceDiv, PriceTag, TextDiv, Wrapper } from "./style";
import { useEffect, useState } from "react";

export interface SearchBagProps {
    search: string
}

export function SearchBag({ search }: SearchBagProps) {

    const [products, setProducts] = useState([])

    const redirect=()=>{
        window.location.href = `/product/${search}/${search}Image`
    }

    useEffect(() => {
        const getProducts = async () => {
            try {
                const api_response = await fetch(
                    `http://localhost:5000/api/products?title=${search}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        }
                    }
                );
                const my_prod = await api_response.json();
                // my_prod.map((prod: any, index: any) => { console.log(my_prod[index]) })
                setProducts(my_prod);
                // console.log(products)
            }
            catch (err) { }
        };
        getProducts();
    })

    return (
        <Container>
            <Wrapper>
                {products.map((produto: any, index: any) => {
                    return (
                        <><H3>Your search results for {search} :</H3>
                            <Item>
                                <Img onClick={redirect} src={produto.img}></Img>
                                <TextDiv>
                                    <P onClick={redirect} >Name: {produto.title}</P>
                                    <P>Description: {produto.desc}</P>
                                    <P>Sizes: {produto.size}</P>
                                </TextDiv>
                                <PriceDiv>
                                    <PriceTag>Price: {produto.price}</PriceTag>
                                </PriceDiv>
                            </Item></>
                    )
                })}
            </Wrapper >
        </Container >
    )
}