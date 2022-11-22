import styled from 'styled-components';


export const Container = styled.div`
    width: 378px;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
`;

export const TextDiv = styled.div`
    width: 200px;
    display: flex;
    flex-flow: column;
`;

export const PriceDiv = styled.div`
    display: flex;
    flex-flow: column;
`;


export const Img = styled.img`
    width: 75px;
    height: 80px;
`;

export const P = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin: 5px;
    color: #626262;
    &:first-child{
        color: black;
    }
`

export const PriceTag = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
    margin-top: 45px;
`

export const Cross = styled.img`
    width: 24px;
height: 24px;
`