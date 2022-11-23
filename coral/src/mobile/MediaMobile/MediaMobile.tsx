import { Container, Img, P, Wrapper, LocationDiv } from "./style";
import face from "../../assets/media/fb.svg"
import insta from "../../assets/media/insta.svg"
import twitter from "../../assets/media/twitter.svg"
import youtube from "../../assets/media/youtube.svg"
import locationIcon from "../../assets/location.svg"

export function MediaMobile() {
    return (
        <Container>
            <Wrapper>
                <Img src={face} ></Img>
                <Img src={insta} ></Img>
                <Img src={twitter} ></Img>
                <Img src={youtube} ></Img>
            </Wrapper>
            <LocationDiv>
                <Img src={locationIcon}></Img>
                <P> United States </P>
            </LocationDiv>
            <P>© 2021 | Cora Leviene All Rights Reserved</P>
        </Container>
    )
}