import { Banner } from "../Banner/Banner"
import { Footer } from "../Footer/Footer"
import { Handpicked } from "../Handpicked/Handpicked"
import { Hero } from "../Hero/Hero"
import { Lifestyle } from "../Lifestyle/Lifestyle"
import { Navbar } from "../Navbar/Navbar"
import { NewArrival } from "../NewArrivals/NewArrivals"
import { ShopByBrands } from "../ShopByBrands/ShopByBrands"
import {Container, } from "./style" 
import GlobalStyle from '../../styles/global';
import HeroImg from "../../assets/hero.png"

export function Home(){
    return(
        <Container>
           <GlobalStyle />
           <Navbar/>
           <Banner delay="We are currently experiencing local customs clearance
            delays. For the latest updates, please check your order status"/>
           <Hero image={HeroImg} title="Carry your Funk" description="Trendy handbags collection for your party animal"/>
           <NewArrival/>
           <Handpicked/>
           <ShopByBrands/>
           <Lifestyle/>
           <Footer/>
        </Container>
    )
}