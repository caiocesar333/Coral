import { Container } from "./style";
import { UserTab } from "./UserTab/UserTab";

export function UserMenu(){
    return(
        <Container>
            <UserTab linkTo="" text="Personal Information" />
            <UserTab linkTo="notfound" text="Refer and Earn" />
            <UserTab linkTo="myorders" text="My Orders" />
            <UserTab linkTo="notfound" text="My Wishlist" />
            <UserTab linkTo="notfound" text="My Reviews" />
            <UserTab linkTo="notfound" text="My Address Book" />
            <UserTab linkTo="notfound" text="My Saved Cards" />
        </Container>
    )
}