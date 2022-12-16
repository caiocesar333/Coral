import { Container } from "./style";
import { UserForm } from "./UserForm/UserForm";
import { UserPic } from "./UserPic/UserPic";


export function UserInfo(){
    return(
        <Container>
            <UserPic></UserPic>
            <UserForm/>
        </Container>
    )
}