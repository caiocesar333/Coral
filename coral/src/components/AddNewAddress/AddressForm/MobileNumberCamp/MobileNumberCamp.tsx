import { Container, Ddd, Input, P, Wrapper } from "./style";

export interface MobileNumberCampProps {
    campName: string,
 
}

export function MobileNumberCamp({ campName, }: MobileNumberCampProps) {
    
    let placeholder : Array<string> 
    placeholder = campName.split(" ", 2)
    let str: string = `Enter ${placeholder[placeholder.length - 1]}`
    return (
        <Container>
            <P>{campName}</P>
            <Wrapper>
                <Ddd placeholder="11"></Ddd>
                <Input  placeholder={str}/>
            </Wrapper>
        </Container>
    )
}