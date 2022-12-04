import { Container, Img, P, Wrapper } from "./style";
import plus from "../../assets/plus.svg"
import { useState } from "react";
import { SelectFilter } from "../SelectFilter/SelectFilter";

export interface FilterOptionsProps {
    filter: string
}

export function FilterOptions({ filter }: FilterOptionsProps) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };


    return (<>
        <Container>
            <P>{filter}</P>
            <Img onClick={handleOpen} src={plus}></Img>
        </Container>
        {open
            ?<Wrapper>
                <SelectFilter filterName="Blue" open={open} setOpen={setOpen}/>
                <SelectFilter filterName="Maroon Red" open={open} setOpen={setOpen}/>
                <SelectFilter filterName="Crimson Red" open={open} setOpen={setOpen}/>
                <SelectFilter filterName="Seinna Pink" open={open} setOpen={setOpen}/>
                <SelectFilter filterName="Teal" open={open} setOpen={setOpen}/>
                <SelectFilter filterName="Aquamarine" open={open} setOpen={setOpen}/>
                <SelectFilter filterName="Off-White" open={open} setOpen={setOpen}/>
                <SelectFilter filterName="Muave Orange" open={open} setOpen={setOpen}/>
            </Wrapper>
            : <></>          
            }</>
    )
}