import { Container, Img, LocationDiv, P } from "./styled";
import locationIcon from "../../assets/location.svg"

export function FooterInfo() {
    return (
        <Container>
            <LocationDiv>
                <Img src={locationIcon}></Img>
                <P> United States </P>
            </LocationDiv>
            <P>© 2021 | Cora Leviene All Rights Reserved</P>
        </Container>
    )
}