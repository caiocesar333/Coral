import { PasswordCamp } from "../AddNewAddress/AddressForm/PasswordCamp/PasswordCamp";
import { BlueButton } from "../Buttons/BlueButton/BlueButton";
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
            <div style={{width:"100%", display:"flex", justifyContent:"flex-end", marginTop:"20px"}}>
                <BlueButton text="Save Changes"/>
            </div>
                
        </Container>
    )
}