import { InputDiv, Img, Input } from "./style";
import Search from "../../assets/search.svg"
import { useState } from "react";
import "../../styles/global.css"

export interface SearchBarProps {
    children?: string,
    placeholder: string
}

const redirect = (item: string) => {
    if(item==="handbags" || item==="Handbags"){
        window.location.href = `/${item}/1`
    }else{
        let str = item.charAt(0).toUpperCase() + item.slice(1)
        window.location.href = `/product/${str}/${str}Image`
    }
}


export function SearchBar({ placeholder }: SearchBarProps) {

    const [item, setItem] = useState("")

    const handle = (e: any) => {
        e.preventDefault()
        redirect(item)
    }
    return (
        <>
            <InputDiv >
                <Img src={Search} alt="search" />
                <form onSubmit={handle}>
                    <Input onChange={event => setItem(event.target.value)} placeholder={placeholder} />
                    <button className="buttonSubmit">Submit</button>
                </form>
            </InputDiv>
        </>
    )
}