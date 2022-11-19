import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 350px;
    background: #1B4B66;
    margin-top: 180px;
    display: flex;
    justify-content: space-between;
    
`;

export const Left = styled.div`
    margin-top: 50px;
    margin-left: 80px;
    display: flex;
    width: 40%;
    height: 80%;
    gap: 80px;
    align-items: flex-start;
`;

export const Right = styled.div`
    margin-top: 50px;
    margin-right: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;




export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
`;


export const P = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 0;
    color: #B6B6B6;
    &:first-child{
        color: white;
    }
    &:hover{
        cursor: pointer;
        color: white;
    }
`;

