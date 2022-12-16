import { FooterInfo } from "../FooterInfo/FooterInfo";
import { Media } from "../Media/Media";
import { Container, P, TextDiv, Left, Right } from "./style";


export function Footer() {
    const redirect = () => {
        window.location.href = "/about"
    }

    return (
        <Container>
            <Left>
                <TextDiv>
                    <P>Shop by Category</P>
                    <P>Skincare</P>
                    <P>Personal Care</P>
                    <P>Handbags</P>
                    <P>Apparels</P>
                    <P>Watches</P>
                    <P>Eye Wear</P>
                    <P>Jewellery</P>
                </TextDiv>
                <TextDiv>
                    <P onClick={redirect}>About</P>
                    <P>Contact Us</P>
                    <P>About Us</P>
                    <P>Careers</P>
                    <P>Press</P>
                </TextDiv>
                <TextDiv>
                    <P>Policy</P>
                    <P>Return Policy</P>
                    <P>Terms of Use</P>
                    <P>Sitemap</P>
                    <P>Security</P>
                    <P>Privacy</P>
                    <P>EPR Compliance</P>
                </TextDiv>
            </Left>
            <Right>
                <Media />
                <FooterInfo />
            </Right>
        </Container>
    )
}