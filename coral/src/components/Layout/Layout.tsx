import { Banner } from "../Banner/Banner"
import { Hero } from "../Hero/Hero"
import { Navbar } from "../Navbar/Navbar"
import { NewArrival } from "../NewArrivals/NewArrivals"
import {Container, } from "./style" 

export function Layout(){
    return(
        <Container>
           <Navbar/>
           <Banner delay="We are currently experiencing local customs clearance
            delays. For the latest updates, please check your order status"/>
           <Hero/>
           <NewArrival/>
        </Container>
    )
}