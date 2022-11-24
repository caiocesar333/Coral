import { Container, Img } from "./style";
import home from "../../assets/Mobile/NavBarFixed/home.svg"
import categories from "../../assets/Mobile/NavBarFixed/categories.svg"
import profile from "../../assets/Mobile/NavBarFixed/profile.svg"
import bag from "../../assets/Mobile/NavBarFixed/bag.svg"
import {useState} from "react"
import { ModalMobile } from "../ModalMobile/ModalMobile";

export function NavFixed(){
    const [showModal, setShowModal] = useState(false)

    const openModal = () =>{
        setShowModal(prev =>!prev)
    }
    return(
        <Container>
            <Img src={home}/>
            <Img src={categories}/>
            <Img src={profile}/>
            <Img onClick={openModal} src={bag}/>
            <ModalMobile showModal={showModal} setShowModal={setShowModal}/>
        </Container>
    )
}