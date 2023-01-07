import { Container, Img, P } from "./style";
import arrow from "../../assets/arrowBack.svg"

export interface BackProps{
    showModal:boolean,
    setShowModal:React.Dispatch<React.SetStateAction<boolean>>,
    search?:boolean,
    handle: boolean,
    setHandle?:React.Dispatch<React.SetStateAction<boolean>>
}


export function Back({showModal,setShowModal,search, handle, setHandle}:BackProps){


    return(
        <Container >
            <Img src={arrow} onClick={e=>{if(setHandle){ setHandle(false)}}}/>
            <P>Back</P>
        </Container>
    )
}