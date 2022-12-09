import { CepContainer, Input, P } from "./style";
import "../../../../styles/global.css"

export interface GenericCampProps{
    campName:string,
    value?:string
}

export function GenericCamp({campName,value}:GenericCampProps){

    let placeholder : Array<string> 
    placeholder = campName.split(" ", 2)
    let str: string = `Enter ${placeholder[placeholder.length - 1]}`
    return(
        <CepContainer>
            <P>{campName}</P>
            <Input value={value} type="text" placeholder={str}/>
        </CepContainer>
    )
}