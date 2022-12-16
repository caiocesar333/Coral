import { Container } from "./style";
import { UserTab } from "./UserTab/UserTab";
import { useParams } from "react-router-dom";
export function UserMenu(){

    let {userId} = useParams()

    return(
        <Container>
            <UserTab linkTo={userId + "/personal"} text="Personal Information" />
            <UserTab linkTo={userId + "/notfound"} text="Refer and Earn" />
            <UserTab linkTo={userId + "/myorders"} text="My Orders" />
            <UserTab linkTo={userId + "/notfound"} text="My Wishlist" />
            <UserTab linkTo={userId + "/notfound"} text="My Reviews" />
            <UserTab linkTo={userId + "/notfound"} text="My Address Book" />
            <UserTab linkTo={userId + "/notfound"} text="My Saved Cards" />
        </Container>
    )
}