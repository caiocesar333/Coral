import { GenericCamp } from "../../../AddNewAddress/AddressForm/GenericCamp/GenericCamp";
import { MobileNumberCamp } from "../../../AddNewAddress/AddressForm/MobileNumberCamp/MobileNumberCamp";
import { Container, Wrapper } from "./style";

export function UserForm() {
    return (
        <Container>
            <Wrapper>
                <GenericCamp campName="First Name"></GenericCamp>
                <GenericCamp campName="Last Name"></GenericCamp>
            </Wrapper>
            <GenericCamp campName="Email"></GenericCamp>
            <MobileNumberCamp campName="Number" ></MobileNumberCamp>
        </Container>
    )
}