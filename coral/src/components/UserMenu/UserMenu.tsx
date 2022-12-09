import { Container } from "./style";
import { UserTab } from "./UserTab/UserTab";

export function UserMenu(){
    return(
        <Container>
            <UserTab text="Personal Information" />
            <UserTab text="Refer and Earn" />
            <UserTab text="My Orders" />
            <UserTab text="My Wishlist" />
            <UserTab text="My Reviews" />
            <UserTab text="My Address Book" />
            <UserTab text="My Saved Cards" />
        </Container>
    )
}