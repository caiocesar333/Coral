import {useState} from "react"
import BagIcon from "../../assets/bag.svg"
import { Modal } from "../Modal/Modal"
import { Img } from "./style"

export interface BagProps{
    children?: string
}

export function Bag( {children}: BagProps){
    const [showModal, setShowModal] = useState(false)
    const openModal = () =>{
        setShowModal(prev =>!prev)
    }


    return(
        <>
        <Img onClick={openModal} width="24" src={BagIcon} alt={children} />
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
        </>
    )
}