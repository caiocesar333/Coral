import { BlueButton } from "../../../Buttons/BlueButton/BlueButton";
import { WhiteButton } from "../../../Buttons/WhiteButton/WhiteButton";
import { Container } from "./style";
import pfp from "../../../../assets/user/pfp.svg"

export function UserPic(){
    return(
        <Container>
            <img src={pfp} alt="pfp"></img>
            <BlueButton text="Upload"></BlueButton>
            <WhiteButton text="Delete"/>
        </Container>
    )
}