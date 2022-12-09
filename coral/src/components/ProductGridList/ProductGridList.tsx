import { Container } from "./style";
import { ProductGrid } from "../ProductGrid/ProductGrid";
import { useEffect, useState } from "react"

export interface ProductGridListpROPS{
    filter:any, 
    setFilter:React.Dispatch<React.SetStateAction<string>>,
}


export function ProductGridList({ filter, setFilter }: ProductGridListpROPS) {
    const [products, setProducts] = useState([]);
    const [filteredProd, setfilteredProd] = useState([]);

    useEffect(() => {
        // getAllUser();
        if(filter === "initial"){
            
        }
        const getProducts = async () => {
            try {
                if(filter === "initial"){
                    const api_response = await fetch(
                        `http://localhost:5000/api/products`,
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
                } else{
                    const api_response = await fetch(
                        `http://localhost:5000/api/products?color=${filter}`,
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
                }
            } catch (err) { }
        };
        getProducts();
    }, [filter]);


    return (
        <Container>
            {products.map((produto: any, index: any) => {
                return (
                    <ProductGrid key={produto.id} image={produto.img} name={produto.title}
                        description={produto.desc} price={produto.price}></ProductGrid>
                )
            })}
        </Container>

    )
}