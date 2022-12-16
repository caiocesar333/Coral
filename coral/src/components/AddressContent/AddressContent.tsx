import { BlueButton } from "../Buttons/BlueButton/BlueButton";
import { Container, P, Text, TextDiv, Wrapper } from "./style";
import art from "../../assets/wishlist/art2.png"
import { H2 } from "../../pages/PhoneVerification/style";

export function AddressContent() {
    return (
        <Container>
            <TextDiv>
                <P>Your Wishlist</P>
            </TextDiv>
            <Wrapper>
                <img alt="" src={art}></img>
                <H2>Well</H2>
                <Text>It seems you have not added any products to for wishlist. </Text>
                <BlueButton address={true} text="Add address"/>
            </Wrapper>
        </Container>
    )
}