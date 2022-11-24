import { Hero } from "../../Hero/Hero";
import { Navbar } from "../../Navbar/Navbar";
import { Container, MobileContainer, Wrapper } from "../style";
import HeroImg from "../../../assets/heroBag.png"
import GlobalStyle from "../../../styles/global";
import { Showcase } from "../../Showcase/Showcase";
import { Footer } from "../../Footer/Footer";
//imports for MobileVersion
import MediaQuery from "react-responsive"
import { CategoryLabel } from "../../../mobile/CategoryLabel/CategoryLabel";
import { FilteringLabel } from "../../../mobile/FilteringLabel/FilteringLabel";

export function Handbags() {
    return (<>
        <MediaQuery minWidth={1200}>
            <Container>
                <GlobalStyle />
                <Navbar></Navbar>
                <Wrapper>
                    <Hero carry={false} image={HeroImg} />
                </Wrapper>
                <Showcase />
                <Footer />
            </Container>
        </MediaQuery>
        <MediaQuery maxWidth={500}>
            <MobileContainer>
                <CategoryLabel />
                <FilteringLabel />
            </MobileContainer>
        </MediaQuery>
    </>
    )
}