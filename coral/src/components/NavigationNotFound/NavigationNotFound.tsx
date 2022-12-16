import Wave from "react-wavify";
import { H1 } from "../../pages/PhoneVerification/style";
import { Container } from "./style";


export function NavigationNotFound() {
    return (
        <Container>
            <H1>
                Ops, those waters haven't been explored yet
            </H1>
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