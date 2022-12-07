import styled from 'styled-components';

export const Container = styled.div`
    width: 60%;
    display: flex;
    gap: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 18px 12px 18px 16px;
    gap: 12px;
    background: #F1F1F1;
    border-radius: 4px;
    border: none;
    outline: none;
    &::placeholder{
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #626262;
    }
`

export const PincodeCheck = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #1B4B66;
    &:hover{
        cursor: pointer;
    }
`;