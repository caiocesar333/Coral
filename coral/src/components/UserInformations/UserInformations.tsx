import { Container, H3, Wrapper } from "./style";
import Avatar from '@mui/material/Avatar';
import url from "../../assets/user/pfp.svg"
import { useParams } from "react-router-dom";
import { useState } from "react";

export interface UserInformationsProps{
    firstName:string,
    username:string,
    email:string,
    lastName:string,
    mobile:string,
    date:string,
}


export function UserInformations({firstName,username,email,lastName,mobile,date}:UserInformationsProps) {

    let { userId } = useParams()
    return (
        <Container>
            <Avatar src={url} sx={{ width: 80, height: 80 }} />
            <div style={{
                display: "flex", gap: "100px", width: "100%", flexDirection: "row", alignItems: "flex-start",
                background: "#f1f1f1", borderRadius: "16px", padding: "12px 16px 12px 5px",
            }}>
                <Wrapper>
                    <H3>First Name: {firstName}</H3>
                    <H3>Username: {username}</H3>
                    <H3>Email: {email}</H3>
                    <H3>User Id: {userId?.substring(0, 8)}...</H3>
                </Wrapper>
                <Wrapper>
                    <H3>Last Name:  {lastName}</H3>
                    <H3>Mobile Number: {mobile} </H3>
                    <H3>Date Of Birth:  {date}</H3>
                    <H3>Coral Points: 10.500</H3>
                </Wrapper>

            </div>
        </Container >
    )
}