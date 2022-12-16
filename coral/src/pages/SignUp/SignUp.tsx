import { Container, ContentWrapper, H1, H2, Img, Wrapper } from "./style";
import { BlueButton } from "../../components/Buttons/BlueButton/BlueButton";
import image1 from "../../assets/SignUp/1.png"
import image2 from "../../assets/SignUp/2.png"
import image3 from "../../assets/SignUp/3.png"
import image4 from "../../assets/SignUp/4.png"
import image5 from "../../assets/SignUp/5.png"
import image6 from "../../assets/SignUp/6.png"
import image7 from "../../assets/SignUp/7.png"
import image8 from "../../assets/SignUp/8.png"
import image9 from "../../assets/SignUp/9.png"
import image10 from "../../assets/SignUp/10.png"

export function SignUp() {

    return (
        <Container>
            <Wrapper >
                <Img alt="" src={image1}></Img>
                <Img alt="" src={image2}></Img>
                <Img alt="" src={image5}></Img>
                <Img alt="" src={image7}></Img>
                <Img alt="" src={image3}></Img>
                <Img alt="" src={image4}></Img>
                <Img alt="" src={image5}></Img>
                <Img alt="" src={image6}></Img>
                <Img alt="" src={image7}></Img>
                <Img alt="" src={image8}></Img>
                <Img alt="" src={image9}></Img>
                <Img alt="" src={image10}></Img>
            </Wrapper>
            <Wrapper>
                <Img alt="" src={image1}></Img>
                <Img alt="" src={image2}></Img>
                <Img alt="" src={image8}></Img>
                <Img alt="" src={image9}></Img>
                <Img alt="" src={image10}></Img>
                <Img alt="" src={image5}></Img>
                <Img alt="" src={image7}></Img>
                <Img alt="" src={image3}></Img>
                <Img alt="" src={image4}></Img>
                <Img alt="" src={image5}></Img>
                <Img alt="" src={image6}></Img>
                <Img alt="" src={image7}></Img>
            </Wrapper>
            <Wrapper>
                <Img alt="" src={image6}></Img>
                <Img alt="" src={image7}></Img>
                <Img alt="" src={image1}></Img>
                <Img alt="" src={image7}></Img>
                <Img alt="" src={image8}></Img>
                <Img alt="" src={image4}></Img>
                <Img alt="" src={image2}></Img>
                <Img alt="" src={image5}></Img>
                <Img alt="" src={image7}></Img>
                <Img alt="" src={image3}></Img>
                <Img alt="" src={image9}></Img>
                <Img alt="" src={image10}></Img>
            </Wrapper>

            <ContentWrapper>
                <H1>
                    The shopping destination you need
                </H1>
                <BlueButton getStarted={true} text="Get Started"/>
                <H2>I already have an account</H2>
            </ContentWrapper>
        </Container>
    )
}