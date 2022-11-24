import {useState} from "react"
import { Container, Img } from "./style";
import sort from "../../assets/Mobile/Filtering/sort.svg"
import filter from "../../assets/Mobile/Filtering/filter.svg"
import { FilterModal } from "../FilterModal/FilterModal";

export function FilteringLabel(){
    const [showModal, setShowModal] = useState(false)

    const openModal = () =>{
        setShowModal(prev =>!prev)
    }
    return(
        <Container>
            <Img onClick={openModal} src={sort}/>
            <Img src={filter}/>
            <FilterModal showModal={showModal} setShowModal={setShowModal}></FilterModal>
        </Container>
    )
}