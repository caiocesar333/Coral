import { Container } from "./style";
import pfp from "../../../../assets/user/pfp.svg"
import { SmallBlueButton } from "../../../Buttons/BlueButton/SmallBlueButton.tsx/SmallBlueButton";
import { SmallRedButton } from "../../../Buttons/WhiteButton/SmallRedButton/SmallRedButton";
import logout from "../../../../assets/logout.svg"

export function UserPic(){
    return(
        <Container>
            <img src={pfp} alt="pfp"></img>
            <SmallBlueButton text="Upload"></SmallBlueButton>
            <SmallRedButton text="Delete"/>
        </Container>
    )
}