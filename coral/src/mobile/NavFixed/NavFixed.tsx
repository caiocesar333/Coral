import { Container, Img } from "./style";
import home from "../../assets/Mobile/NavBarFixed/home.svg"
import categories from "../../assets/Mobile/NavBarFixed/categories.svg"
import profile from "../../assets/Mobile/NavBarFixed/profile.svg"
import bag from "../../assets/Mobile/NavBarFixed/bag.svg"

export function NavFixed(){
    return(
        <Container>
            <Img src={home}/>
            <Img src={categories}/>
            <Img src={profile}/>
            <Img src={bag}/>
        </Container>
    )
}