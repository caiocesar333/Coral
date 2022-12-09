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
        </Container>
    )
}