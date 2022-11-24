import { CheckBox, CheckBoxLabel, Container, Item } from "./style";
import checkbox from "../../assets/checkbox.svg"
import checkboxChecked from "../../assets/checkboxC.svg"
import { useState } from "react";

export interface SelectFilterProps{
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    filterName: string
}

export function SelectFilter({open, setOpen,filterName}:SelectFilterProps){

      const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked)
    };
    return(
        <Container>
            <Item>
                <CheckBox onClick={handleCheck} src={checked? checkboxChecked : checkbox }/>
                <CheckBoxLabel onClick={handleCheck}>{filterName}</CheckBoxLabel>
            </Item>
        </Container>
    )
}