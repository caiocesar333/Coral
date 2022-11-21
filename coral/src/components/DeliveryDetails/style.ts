import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

export const Details = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    color: #171520;

`;

export const Check = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #626262;

`;

export const Wrapper = styled.div`

`;

export const QuantityDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const QuantityHandle = styled.div`
    width: 73px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #1B4B66;
    border-radius: 4px;
`;

export const Img = styled.img`
    width: 24px;
    height: 24px;
    &:hover{
        cursor: pointer;
    }
`;

export const P = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
`;

export const Pincode = styled.div`
    display: flex;
    width: 390px;
    height: 20px;
    padding: 18px 12px 18px 16px;
    gap: 12px;
    background: #F1F1F1;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin-top: 40px;
`;

export const Input = styled.input`
    display: flex;
    width: 190px;
    height: 10px;
    padding: 9px 6px 9px 8px;
    gap: 12px;
    background: #F1F1F1;
    outline: none;
    border: none;
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
