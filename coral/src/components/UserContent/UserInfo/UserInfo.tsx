import { Container } from "./style";
import { UserForm } from "./UserForm/UserForm";
import { UserPic } from "./UserPic/UserPic";

export interface UserInfoProps {
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



export function UserInfo({ firstName, username, email, lastName, mobile, date, setDate, setEmail, setFirstName, setLastName, setMobile, setUsername }: UserInfoProps) {
    console.log(firstName)
    return (
        <Container>
            <UserPic></UserPic>
            <UserForm date={date} username={username} firstName={firstName}
                lastName={lastName} email={email} mobile={mobile} setDate={setDate}
                setEmail={setEmail} setFirstName={setFirstName} setLastName={setLastName}
                setMobile={setMobile} setUsername={setUsername}/>
        </Container>
    )
}