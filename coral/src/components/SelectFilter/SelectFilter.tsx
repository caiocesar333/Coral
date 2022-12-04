import { CheckBox, CheckBoxLabel, Container, Item } from "./style";
import checkbox from "../../assets/checkbox.svg"
import checkboxChecked from "../../assets/checkboxC.svg"
import { useState } from "react";

export interface SelectFilterProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    filterName: string
}

export function SelectFilter({ open, setOpen, filterName }: SelectFilterProps) {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked)
    };

    const [filters, setFilters] = useState<any | null>(false);
    const handleFilters = (e: any) => {
        if(filters===false){
            let value = filterName
            setFilters(value)
        } else{
            setFilters(false)
        }
        return filters
    }
    console.log(filters)
    return (
        <Container>
            <Item>
                <CheckBox onClick={event=>{handleCheck();handleFilters(filterName)}} src={checked ? checkboxChecked : checkbox} />
                <CheckBoxLabel onClick={event=>{handleCheck();handleFilters(filterName)}} >{filterName}</CheckBoxLabel>
            </Item>
        </Container>
    )
}
