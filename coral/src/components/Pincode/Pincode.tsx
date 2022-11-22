import { Input, PincodeCheck, Container } from "./style";

export interface PincodeProps{
    placeholder:string
}

export function Pincode({placeholder}:PincodeProps) {

    const text = "Apply" +" "+ placeholder
    
    return (
        <Container>
            <Input placeholder={text}></Input>
            <PincodeCheck>CHECK</PincodeCheck>
        </Container>
    )
}
