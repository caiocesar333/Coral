import { PasswordCamp } from "../AddNewAddress/AddressForm/PasswordCamp/PasswordCamp";
import { Container, P, TextDiv } from "./style";
import { UserInfo } from "./UserInfo/UserInfo";


export interface UserContentProps {
    firstName: string,
    username: string,
    email: string,
    lastName: string,
    mobile: string,
    date: string,
    setFirstName: React.Dispatch<React.SetStateAction<string>>,
    setLastName: React.Dispatch<React.SetStateAction<string>>,
    setUsername: React.Dispatch<React.SetStateAction<string>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setMobile: React.Dispatch<React.SetStateAction<string>>,
    setDate: React.Dispatch<React.SetStateAction<string>>
}

export function UserContent({ firstName, username, email, lastName, mobile, date, setDate, setEmail, setFirstName, setLastName, setMobile, setUsername }: UserContentProps) {
    console.log(firstName)
    return (
        <Container>
            <TextDiv>
                <P>Personal Information</P>
            </TextDiv>
            <UserInfo date={date} username={username} firstName={firstName}
                lastName={lastName} email={email} mobile={mobile} setDate={setDate}
                setEmail={setEmail} setFirstName={setFirstName} setLastName={setLastName}
                setMobile={setMobile} setUsername={setUsername} />
            <TextDiv>
                <P>Change Password</P>
            </TextDiv>
            <PasswordCamp campName="Current Password" />
            <PasswordCamp campName="New Password" />
            <PasswordCamp campName="Confirm Password" />
        </Container>
    )
}