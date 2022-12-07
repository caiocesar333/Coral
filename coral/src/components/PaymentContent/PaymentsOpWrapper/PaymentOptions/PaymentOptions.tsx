import { Container, InputRadio } from "./style";

export interface PaymentOptionsProps{
    img:string,
}

export function PaymentOptions({img}:PaymentOptionsProps) {
    return(
        <Container img={img}>
                <InputRadio name="option" type="radio"></InputRadio>
        </Container>
    )
}