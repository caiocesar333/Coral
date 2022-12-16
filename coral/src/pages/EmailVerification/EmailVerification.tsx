import { Container, ErrorSpan, H1, H2, Wrapper } from "./style";
import Wave from "react-wavify";
import "../../styles/global.css"
import { useEffect, useState } from "react";

import { P } from "../../components/AddNewAddress/AddressForm/GenericCamp/style";
import { useParams } from "react-router-dom";

export function EmailVerification() {

    const redirect = () => {
        window.location.href = `/${userId}/personal`
    }
    const [error, setError] = useState(false)
    const [newUsername, setUsername] = useState("")

    const { userId } = useParams()


    useEffect(() => {
        const updateProd = async () => {
            try {
                const api_response = await fetch(
                    `http://localhost:5000/api/users/${userId}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ username:newUsername })
                    }
                );
                const my_user = await api_response.json();

                console.log(my_user.username)

            } catch (error) {
                console.log(error)
            }
        };
        updateProd();

    })

    return (
        <Container>
            <Wrapper>
                <H1>Welcome to Coral</H1>
                <H2>Enter your personal information</H2>
                <form style={{ width: "80%" }} onSubmit={(e) => { e.preventDefault(); redirect() }}>
                    <P>Username</P>
                    <input type="text" className="input" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Username" />
                    <P>Password</P>
                    <input style={{ marginTop: "15px" }} type="password" className="input" placeholder="Enter Password" />
                    <button style={{ marginTop: "15px" }} className="blue-button">Next</button>
                    {error ? <ErrorSpan>Invalid characters</ErrorSpan> : <></>}
                </form>
            </Wrapper>
            <Wave fill="#1b4b66"
                paused={false}
                options={{
                    height: 0,
                    amplitude: 30,
                    speed: 0.2,
                    points: 5
                }} />
        </Container>
    )
}