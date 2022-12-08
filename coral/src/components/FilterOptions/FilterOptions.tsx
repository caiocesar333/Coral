import { Container, Img, P, Wrapper } from "./style";
import plus from "../../assets/plus.svg"
import { useState } from "react";
import { SelectFilter } from "../SelectFilter/SelectFilter";

export interface FilterOptionsProps {
    filterName: string,
    filter:any, 
    setFilter:React.Dispatch<React.SetStateAction<string>>,
}

export function FilterOptions({ filter, setFilter,filterName }: FilterOptionsProps) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };


    return (<>
        <Container>
            <P>{filterName}</P>
            <Img onClick={handleOpen} src={plus}></Img>
        </Container>
        {open
            ?<Wrapper>
                <SelectFilter filter={filter} setFilter={setFilter} filterName="blue" open={open} setOpen={setOpen}/>
                <SelectFilter filter={filter} setFilter={setFilter} filterName="maroon red" open={open} setOpen={setOpen}/>
                <SelectFilter filter={filter} setFilter={setFilter} filterName="crimson red" open={open} setOpen={setOpen}/>
                <SelectFilter filter={filter} setFilter={setFilter} filterName="seinna pink" open={open} setOpen={setOpen}/>
                <SelectFilter filter={filter} setFilter={setFilter} filterName="teal" open={open} setOpen={setOpen}/>
                <SelectFilter filter={filter} setFilter={setFilter} filterName="aquamarine" open={open} setOpen={setOpen}/>
                <SelectFilter filter={filter} setFilter={setFilter} filterName="off white" open={open} setOpen={setOpen}/>
                <SelectFilter filter={filter} setFilter={setFilter} filterName="muave orange" open={open} setOpen={setOpen}/>
            </Wrapper>
            : <></>          
            }</>
    )
}