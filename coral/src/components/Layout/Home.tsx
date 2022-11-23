import { Banner } from "../Banner/Banner"
import { Footer } from "../Footer/Footer"
import { Handpicked } from "../Handpicked/Handpicked"
import { Hero } from "../Hero/Hero"
import { Lifestyle } from "../Lifestyle/Lifestyle"
import { Navbar } from "../Navbar/Navbar"
import { NewArrival } from "../NewArrivals/NewArrivals"
import { ShopByBrands } from "../ShopByBrands/ShopByBrands"
import { Container, MobileContainer } from "./style"
import GlobalStyle from '../../styles/global';
import HeroImg from "../../assets/hero.png"
import MediaQuery from "react-responsive"
import { NavbarMobile } from "../../mobile/NavbarMobile/NavbarMobile"
import { BannerMobile } from "../../mobile/Banner/BannerMobile"
import { TopCategories } from "../../mobile/TopCategories/TopCategories"
import { RowListMobile } from "../../mobile/RowListMobile/RowListMobile"
import { LabelMobile } from "../../mobile/LabelMobile/LabelMobile"
import { HandpickedMobile } from "../../mobile/HandpickedMobile/HandpickedMobile"
import { BrandsMobile } from "../../mobile/BrandsMobile/BrandsMobile"
import { AddShortCut } from "../../mobile/AddShortCut/AddShortCut"
import { LifestyleMobile } from "../../mobile/LifestyleMobile/LifestyleMobile"
import funk from "../../assets/Mobile/Banners/funk.svg"
import spring from "../../assets/Mobile/Banners/spring.png"
import { DropDownFooter } from "../../mobile/DropDownFooter/DropDownFooter"
import { NavFixed } from "../../mobile/NavFixed/NavFixed"

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
                <BannerMobile img={funk} />
                <LabelMobile title="Top Categories" viewAll={false}/>
                <TopCategories />
                <LabelMobile title="New Arrivals" viewAll={true}/>
                <RowListMobile/>
                <HandpickedMobile/>
                <LabelMobile title="Shop By Brands" viewAll={true}/>
                <BrandsMobile/>
                <AddShortCut/>
                <LabelMobile title="Makeup & Skincare" viewAll={false}/>
                <LifestyleMobile/>
                <LabelMobile title="Trending Deals" viewAll={false}/>
                <BannerMobile img={spring}/>
                <DropDownFooter/>
                <NavFixed/>
            </MobileContainer>
        </MediaQuery>
    </>
    )
}