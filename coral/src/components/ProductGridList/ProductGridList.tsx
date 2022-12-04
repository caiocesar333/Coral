import { Container } from "./style";
import { ProductGrid } from "../ProductGrid/ProductGrid";
import { useEffect, useState } from "react"


export function ProductGridList({ cat, filters, sort }: any) {
    const [products, setProducts] = useState([]);
    const [filteredProd, setfilteredProd] = useState([]);

    useEffect(() => {
        // getAllUser();
        const getProducts = async () => {
            try {
                const api_response = await fetch(
                    "http://localhost:5000/api/products",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        }
                    }
                );
                const my_prod = await api_response.json();
                my_prod.map((prod: any, index: any) => { console.log(my_prod[index]) })
                setProducts(my_prod);
            } catch (err) { }
        };
        getProducts();
    }, []);

    useEffect(() => {
        cat && setfilteredProd(products.filter((item:any) =>
            Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
            )
        ))
    }, [products, cat, filters,])

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