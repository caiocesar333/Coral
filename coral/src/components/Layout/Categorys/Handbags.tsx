import { Hero } from "../../Hero/Hero";
import { Navbar } from "../../Navbar/Navbar";
import { Container } from "../style";
import HeroImg from "../../../assets/heroBag.png"

export function Handbags(){
    return(
        <Container>
           <Navbar></Navbar> 
           <Hero image={HeroImg}></Hero>
        </Container>
    )
}