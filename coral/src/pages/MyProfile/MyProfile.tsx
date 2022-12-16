import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { PageLabel } from "../../components/TextComponents/PageLabel/PageLabel";
import { PageTitle } from "../../components/TextComponents/PageTitle/PageTitle";
import { UserContent } from "../../components/UserContent/UserContent";
import { UserInformations } from "../../components/UserInformations/UserInformations";
import { UserMenu } from "../../components/UserMenu/UserMenu";
import { UserProfile } from "../UserProfile/UserProfile";
import { Container, Wrapper } from "./style";


export function MyProfile() {

    const [personalInfo, setPersonalInfo] = useState(false)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [date, setDate] = useState("")

    console.log(firstName)
    return (
        <Container>
            <Navbar />
            <PageLabel from="Home" to="User Profile" />
            <PageTitle title="My Profile" button={false} />
            <Wrapper>
                <UserMenu />
                {personalInfo ? <UserContent date={date} username={username} firstName={firstName}
                    lastName={lastName} email={email} mobile={mobile} setDate={setDate}
                    setEmail={setEmail} setFirstName={setFirstName} setLastName={setLastName}
                    setMobile={setMobile} setUsername={setUsername} />
                :<UserInformations date={date} username={username} firstName={firstName}
                lastName={lastName} email={email} mobile={mobile} />}
            </Wrapper>
            <Footer />
        </Container>
    )
}