import { Hero } from "../../Hero/Hero";
import { Navbar } from "../../Navbar/Navbar";
import { Container, Wrapper } from "../style";
import HeroImg from "../../../assets/heroBag.png"
import GlobalStyle from "../../../styles/global";
import { Showcase } from "../../Showcase/Showcase";
import { Footer } from "../../Footer/Footer";


export function Handbags() {
    return (
        <Container>
            <GlobalStyle />
            <Navbar></Navbar>
            <Wrapper>
                <Hero carry={false} image={HeroImg} />
            </Wrapper>
            <Showcase />
            <Footer/>
        </Container>
    )
}