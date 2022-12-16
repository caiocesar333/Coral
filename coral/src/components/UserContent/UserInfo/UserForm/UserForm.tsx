import { DateForm } from "../../../AddNewAddress/AddressForm/DateForm/DateForm";
import { GenericCamp } from "../../../AddNewAddress/AddressForm/GenericCamp/GenericCamp";
import { MobileNumberCamp } from "../../../AddNewAddress/AddressForm/MobileNumberCamp/MobileNumberCamp";
import { Container, Wrapper } from "./style";


export interface UserFormProps{
    firstName:string,
    username:string,
    email:string,
    lastName:string,
    mobile:string,
    date:string,
    setFirstName:React.Dispatch<React.SetStateAction<string>>,
    setLastName:React.Dispatch<React.SetStateAction<string>>,
    setUsername:React.Dispatch<React.SetStateAction<string>>,
    setEmail:React.Dispatch<React.SetStateAction<string>>,
    setMobile:React.Dispatch<React.SetStateAction<string>>,
    setDate:React.Dispatch<React.SetStateAction<string>>
}




export function UserForm({firstName,username,email,lastName,mobile,date,setDate,setEmail,setFirstName,setLastName,setMobile,setUsername}:UserFormProps) {
    console.log(firstName)
    return (
        <Container><form onSubmit={(e)=>{e.preventDefault();}}>
            <Wrapper>
                <input value={firstName} onChange={e=>{setFirstName(e.target.value)}}className="input" />
                <input  value={lastName} onChange={e=>setLastName(e.target.value)}className="input" />
            </Wrapper>
            <input value={email} onChange={e=>setEmail(e.target.value)} className="input" />
            <input  value={mobile} onChange={e=>setMobile(e.target.value)}className="input" />
            <input  value={date} onChange={e=>setDate(e.target.value)}className="input" />
            <button>submit</button>
            </form>
        </Container>
    )
}