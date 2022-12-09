import { Container, Input, P } from "./style";

export interface PasswordCampProps{
    campName:string
}


export function PasswordCamp({campName}:PasswordCampProps){
    return(
        <Container>
            <P>{campName}</P>
            <Input type="password" maxLength={8 }placeholder="Password"/>
        </Container>
    )
} 