import { useEffect, useState } from "react";
import { SearchBag } from "../../../SearchBag/SearchBag";
import { Back } from "../../../TextComponents/Back";
import { Container } from "./style";

export interface SearchingGridProps{
    search:string,
    setSearch:React.Dispatch<React.SetStateAction<string>>
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    handle: boolean,
    setHandle:React.Dispatch<React.SetStateAction<boolean>>
}


export function SearchShowCase({search, setSearch, showModal, setShowModal, handle, setHandle}:SearchingGridProps){

    const [products, setProducts] = useState([])

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


    return(
        <Container>
            <Back handle={handle} setHandle={setHandle} search={true} showModal={showModal} setShowModal={setShowModal}></Back>
            <SearchBag search={search} />
        </Container>
    )
}