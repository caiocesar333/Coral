import { Container, Img, Arrow } from "./style";
import error from "../../../assets/404/404.jpg"
import arrowBack from "../../../assets/arrowBack.svg"
import Wave from "react-wavify";
import { H1 } from "../../../pages/PhoneVerification/style";
import { H2 } from "../../../pages/CodeVerification/style";


export function Error() {
    const redirect = () => {
        window.location.href = "/home"
    }
    return (
        <Container>
            <H1>
                Ops, those waters haven't been explored yet
            </H1>
            <H2>Error 404</H2>
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