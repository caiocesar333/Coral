import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { PageLabel } from "../../components/TextComponents/PageLabel/PageLabel";
import { PageTitle } from "../../components/TextComponents/PageTitle/PageTitle";
import { UserContent } from "../../components/UserContent/UserContent";
import { UserMenu } from "../../components/UserMenu/UserMenu";
import { Container, Wrapper } from "./style";

export interface UserProfileProps {
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


export function UserProfile({ firstName, username, email, lastName, mobile, date, setDate, setEmail, setFirstName, setLastName, setMobile, setUsername }: UserProfileProps) {
    console.log(firstName)
    return (
        <Container>
            <Navbar />
            <PageLabel from="Home" to="User Profile" />
            <PageTitle title="Personal Information" button={false} />
            <Wrapper>
                <UserMenu />
                <UserContent date={date} username={username} firstName={firstName}
                    lastName={lastName} email={email} mobile={mobile} setDate={setDate}
                    setEmail={setEmail} setFirstName={setFirstName} setLastName={setLastName}
                    setMobile={setMobile} setUsername={setUsername} />
            </Wrapper>
            <Footer />
        </Container>
    )
}