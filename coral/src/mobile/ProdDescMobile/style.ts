import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TextDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
    align-items: center;
`;


export const P = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #626262;
        &:first-child{
            color: black;
            line-height: 16px;
            font-weight: 600;
        }
`;

export const Line = styled.div`
    width: 100%;
    background:#F1F1F1; ;
    height: 10px;
    margin-top: 20px;
`;
