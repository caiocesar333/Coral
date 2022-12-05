import { Hero } from "../../Hero/Hero";
import { Navbar } from "../../Navbar/Navbar";
import { Container, MobileContainer, Wrapper } from "../style";
import HeroImg from "../../../assets/heroBag.png"
import GlobalStyle from "../../../styles/global";
import { Footer } from "../../Footer/Footer";
//imports for MobileVersion
import MediaQuery from "react-responsive"
import { CategoryLabel } from "../../../mobile/CategoryLabel/CategoryLabel";
import { FilteringLabel } from "../../../mobile/FilteringLabel/FilteringLabel";
import { PaginationButtons } from "../../PaginationButtons/PaginationButtons";
import { Showcase2 } from "../../Showcase/Page2/Showcase2";

export function Handbags2() {
    return (<>
        <MediaQuery minWidth={1200}>
            <Container>
                <GlobalStyle />
                <Navbar></Navbar>
                <Wrapper>
                    <Hero carry={false} image={HeroImg} />
                </Wrapper>
                <Showcase2 />
                <PaginationButtons/>
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