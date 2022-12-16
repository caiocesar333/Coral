import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    margin-right: 20px;
`;

export const Wrapper = styled.div`
`;



export const Img = styled.img`
    margin-right:5px;
    margin-left:5px;
    &:hover{
        cursor: pointer;
        filter: invert(78%) sepia(52%) saturate(3799%) hue-rotate(325deg) brightness(100%) contrast(101%);
        
    }
`

export const StarImage = styled.img`
    &:hover{
        cursor: pointer;
    }
    &:last-child{
        opacity: 0.2;
        &:hover{
            opacity: 1;
        }
    }
`
