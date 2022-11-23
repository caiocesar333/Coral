import { Banner } from "../Banner/Banner"
import { Footer } from "../Footer/Footer"
import { Handpicked } from "../Handpicked/Handpicked"
import { Hero } from "../Hero/Hero"
import { Lifestyle } from "../Lifestyle/Lifestyle"
import { Navbar } from "../Navbar/Navbar"
import { NewArrival } from "../NewArrivals/NewArrivals"
import { ShopByBrands } from "../ShopByBrands/ShopByBrands"
import { Container, FlexDiv, MobileContainer } from "./style"
import GlobalStyle from '../../styles/global';
import HeroImg from "../../assets/hero.png"
import MediaQuery from "react-responsive"
import { NavbarMobile } from "../../mobile/Navbar/NavbarMobile"
import { BannerMobile } from "../../mobile/Banner/BannerMobile"
import { TopCategories } from "../../mobile/TopCategories/TopCategories"
import { ProductRowList } from "../ProductRowList/ProductRowList"

export function Home() {
    return (<>
        <MediaQuery minWidth={1200}>
            <Container>
                <GlobalStyle />
                <Navbar />
                <Banner delay="We are currently experiencing local customs clearance
            delays. For the latest updates, please check your order status"/>
                <Hero carry={true} image={HeroImg} title="Carry your Funk" description="Trendy handbags collection for your party animal" />
                <NewArrival />
                <Handpicked />
                <ShopByBrands />
                <Lifestyle />
                <Footer />
            </Container>
        </MediaQuery>
        <MediaQuery maxWidth={500}>
            <MobileContainer>
                <NavbarMobile />
                <BannerMobile />
                <TopCategories />
            </MobileContainer>
        </MediaQuery>
    </>
    )
}