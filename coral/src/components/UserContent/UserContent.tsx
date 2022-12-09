import { PasswordCamp } from "../AddNewAddress/AddressForm/PasswordCamp/PasswordCamp";
import { Container, P, TextDiv } from "./style";
import { UserInfo } from "./UserInfo/UserInfo";


export function UserContent() {
    return (
        <Container>
            <TextDiv>
                <P>Personal Information</P>
            </TextDiv>
            <UserInfo />
            <TextDiv>
                <P>Change Password</P>
            </TextDiv>
            <PasswordCamp campName="Current Password"/>
            <PasswordCamp campName="New Password"/>
            <PasswordCamp campName="Confirm Password"/>
        </Container>
    )
}