import { update } from "react-spring";
import { Container, Ddd, Input, P, Wrapper } from "./style";

export interface MobileNumberCampProps {
    campName: string,
    phone?:string,
    setPhone?: React.Dispatch<React.SetStateAction<undefined>> | any
}

export function MobileNumberCamp({ campName,phone, setPhone }: MobileNumberCampProps) {
    
    let placeholder : Array<string> 
    placeholder = campName.split(" ", 2)
    let str: string = `Enter ${placeholder[placeholder.length - 1]}`
    return (
        <Container>
            <P>{campName}</P>
            <Wrapper>
                <Ddd placeholder="11"></Ddd>
                <Input maxLength={11} value={phone} onChange={e=>setPhone(e.target.value)} placeholder={str}/>
            </Wrapper>
        </Container>
    )
}