import { Hero } from "../../components/Hero/Hero";
import { Navbar } from "../../components/Navbar/Navbar";
import GlobalStyle from "../../styles/global";
import { Container, DescriptionDiv, DescText, H4, P, TextDiv } from "./style";
import { Banner } from "../../components/Banner/Banner";
import heroImage from "../../assets/about/banner.png"
import desc1 from "../../assets/about/desc1.png"
import desc2 from "../../assets/about/desc2.png"
import desc3 from "../../assets/about/desc3.png"
import { Footer } from "../../components/Footer/Footer";

export function About() {
    return (
        <Container>
            <GlobalStyle />
            <Navbar />
            <Banner delay="We are currently experiencing local customs clearance
            delays. For the latest updates, please check your order status"/>
            <Hero carry={false} image={heroImage} />
            <TextDiv>
                <H4>About</H4>
                <P>Lorem Ipsum is simply dummy text of the printing.
                    Lorem Ipsum is simply dummy text of the printing.
                    Lorem Ipsum is simply dummy text of the printing.
                    Lorem Ipsum is simply dummy text of the printing.
                    Lorem Ipsum is simply dummy text of the printing.
                    Lorem Ipsum is simply dummy text of the printing. </P>
            </TextDiv>
            <DescriptionDiv>
                <TextDiv>
                    <H4>About</H4>
                    <DescText>Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing. </DescText>
                </TextDiv>
                <img src={desc1} alt=""></img>
            </DescriptionDiv>
            <DescriptionDiv>
                <img src={desc2} alt=""></img>
                <TextDiv>
                    <H4>About</H4>
                    <DescText>Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing. </DescText>
                </TextDiv>
            </DescriptionDiv>
            <DescriptionDiv>
                <TextDiv>
                    <H4>About</H4>
                    <DescText>Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing. </DescText>
                </TextDiv>
                <img src={desc3} alt=""></img>
            </DescriptionDiv>
            <Footer/>
        </Container>
    )
}