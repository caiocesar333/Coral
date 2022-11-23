import { MediaMobile } from "../MediaMobile/MediaMobile";
import { Container, P, TextDiv, Wrapper } from "./style";


export function FooterMobile() {
    return (
        <Container>
            <Wrapper>
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
                    <P>Policy</P>
                    <P>Return | Terms of use | Sitemap |
                        Security | Privacy | EPR Compliance</P>
                </TextDiv>
                <TextDiv>
                    <P>About</P>
                    <P>Contact Us | About Us | Careers | Press </P>
                </TextDiv>
            </Wrapper>
            <MediaMobile/>
        </Container>
    )
}