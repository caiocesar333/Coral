import { AddBagButton } from "../../components/Buttons/AddBagButton/AddBagButton"
import { Favorite } from "../../components/Icons/Favorite"
import { Container } from "./style"


export function ButtonFixed(){
    return(
        <Container>
            <Favorite/>
            <AddBagButton/>
        </Container>
    )
}