import { Container, Img, P } from "./style";
import arrow from "../../assets/arrowBack.svg"

export interface BackProps{
    showModal:boolean,
    setShowModal:React.Dispatch<React.SetStateAction<boolean>>
}


export function Back({showModal,setShowModal}:BackProps){
    return(
        <Container onClick={()=>setShowModal(prev =>!prev)}>
            <Img src={arrow}/>
            <P>Back</P>
        </Container>
    )
}