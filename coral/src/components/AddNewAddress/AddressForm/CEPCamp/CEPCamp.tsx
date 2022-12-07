import { Container, Input, P } from "./style";

export interface CEPCampProps{
    campName:string
}

export function CEPCamp({campName}:CEPCampProps){
    
    let placeholder : Array<string> 
    placeholder = campName.split(" ", 2)
    let str: string = `Enter ${placeholder[placeholder.length - 1]}`
    return(
        <Container>
            <P>{campName}</P>
            <Input maxLength={8} type="text" placeholder={str}/>
        </Container>
    )
}