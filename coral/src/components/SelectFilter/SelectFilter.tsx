import { CheckBox, CheckBoxLabel, Container, Item } from "./style";
import { useState } from "react";

export interface SelectFilterProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    filterName: string,
    filter:any, 
    setFilter:React.Dispatch<React.SetStateAction<string>> | any
}


export function SelectFilter({ open, setOpen, filterName,filter,setFilter }: SelectFilterProps) {
    const [check, setChecked] = useState(false);
    const handleCheck = () => {
        setChecked(!check)
    };

    const str = filterName;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);

    const handleFilters = (filterName: any) => {
        if (filter === "initial" && check ===false) {
            const value = filterName;
            setFilter(value)
            console.log(filterName)
        } if (filter === "initial" && check ===true) {
            const value = filterName;
            setFilter(value)
            console.log(filterName)
        } if(filter === filterName && check === true){
            setFilter("initial")
        }
        
    }

    return (
        <Container>
            <Item>
                <CheckBox type="checkbox" checked={check} onChange={event => { handleCheck(); handleFilters(filterName) }} />
                <CheckBoxLabel onClick={event => { handleCheck(); handleFilters(filterName) }}>{str2}</CheckBoxLabel>
            </Item>
        </Container>
    )
}
