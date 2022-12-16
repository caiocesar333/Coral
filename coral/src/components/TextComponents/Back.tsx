import { Container, Img, P } from "./style";
import arrow from "../../assets/arrowBack.svg"

export interface BackProps{
    showModal:boolean,
    setShowModal:React.Dispatch<React.SetStateAction<boolean>>,
    search?:boolean
}


export function Back({showModal,setShowModal,search}:BackProps){

    const redirect =()=>{
        if (search) {
            window.location.href="/handbags/1"
        } else {
            setShowModal(prev=>!prev)
        }
    }
    return(
        <Container onClick={redirect}>
            <Img src={arrow}/>
            <P>Back</P>
        </Container>
    )
}