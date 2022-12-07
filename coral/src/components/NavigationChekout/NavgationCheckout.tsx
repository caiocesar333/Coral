import { BlueButton } from "../Buttons/BlueButton/BlueButton";
import { TextButtonBlue } from "../TextComponents/TextButtons/TextButtonBlue";
import { Container } from "./style";


export function NavgationCheckout() {
    return(
        <Container>
            <TextButtonBlue text="Back to cart"/>
            <BlueButton text="Next" />
        </Container>
    )
}