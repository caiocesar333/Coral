import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    flex-direction: column;
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
    width: 328px;
    height: 26px;
    padding: 14px 0 14px 16px;
    gap: 12px;
    background: #F1F1F1;
    border-radius: 4px;
    display: flex;
    align-items: center;
`
export const Input = styled.input`
    width: 70%;
    height: 30%;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    border: none;
    outline: none;
    background: #F1F1F1;
`
export const PincodeCheck = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #1B4B66;

`