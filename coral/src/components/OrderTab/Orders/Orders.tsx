import { Container, Img, P, Wrapper } from "./style";
import arrow from "../../../assets/arrow2.svg"

export interface OrdersProps{
    orderId:string,
    date:Date,
    amount:string,
    status:string
}

export function Orders({orderId,date,amount,status}:OrdersProps) {

    const convertedDate = date.toString()
    const realDate = convertedDate.substring(0,10).split("")
    let month = ""
    const day = `${realDate[8]+realDate[9]}`
    const year = `${realDate[0]+realDate[1]+realDate[2]+realDate[3]}`

    if(realDate[5]==="0" || realDate[6]==="1"){
         month = "Janeiro"
    }
    if(realDate[5]==="0" || realDate[6]==="2"){
         month = "Fevereiro"
    }
    if(realDate[5]==="0" || realDate[6]==="3"){
         month = "Março"
    }
    if(realDate[5]==="0" || realDate[6]==="4"){
         month = "Abril"
    }
    if(realDate[5]==="0" || realDate[6]==="5"){
         month = "Maio"
    }
    if(realDate[5]==="0" || realDate[6]==="6"){
         month = "Junho"
    }
    if(realDate[5]==="0" || realDate[6]==="7"){
         month = "Julho"
    }
    if(realDate[5]==="0" || realDate[6]==="8"){
         month = "Agosto"
    }
    if(realDate[5]==="0" || realDate[6]==="9"){
         month = "Setembro"
    }
    if(realDate[5]==="1" || realDate[6]==="0"){
         month = "Outubro"
    }
    if(realDate[5]==="1" || realDate[6]==="1"){
         month = "Novembro"
    }
    if(realDate[5]==="1" || realDate[6]==="2"){
         month = "Dezembro"
    }
    
    // console.log(realDate)

    return (
        <Container>
            <Wrapper>
                <P>{orderId}</P>
                <P>{`${month} ${day}, ${year}`}</P>
                <P>{amount}</P>
                <P>{status}</P>
                <Img src={arrow} alt=""></Img>
            </Wrapper>
        </Container>
    )
}