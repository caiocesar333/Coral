import { InputDiv, Img, Input } from "./style";
import Search from "../../assets/search.svg"
import {  useState } from "react";
import "../../styles/global.css"
import { SearchingGrid } from "./SearchingGrid/SearchingGrid";
import { Handle } from "../QuantityHandle/style";

export interface SearchBarProps {
    children?: string,
    placeholder: string
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export function SearchBar({ placeholder,setShowModal, showModal  }: SearchBarProps) {

    const [search, setSearch] = useState("")
    const [handle, setHandle] = useState(false)

    const handleRender=()=>{
        if (search ==="") {
            setHandle(false)
        } else setHandle(true)
    }

    return (
        <>
            <InputDiv >
                <Img src={Search} alt="search" />
                <form onSubmit={(e)=>{e.preventDefault();handleRender()}}>

                    <Input onChange={event => setSearch(event.target.value)} placeholder={placeholder} />
                    <button className="buttonSubmit">Submit</button>
                </form>
            {
                handle ? <SearchingGrid handle={handle} setHandle={setHandle} setShowModal={setShowModal} 
                showModal={handle}  search={search} setSearch={setSearch}/> :<></>
            }
            </InputDiv>
        </>
    )
}