import { InputDiv, Img, Input } from "./style";
import Search from "../../assets/search.svg"


export interface SearchBarProps {
    children?: string,
    placeholder: string
}


export function SearchBar({ placeholder }: SearchBarProps) {
    return (
        <>
            <InputDiv >
                <Img src={Search} alt="search" />
                <Input placeholder={placeholder}/>
            </InputDiv>
        </>
    )
}