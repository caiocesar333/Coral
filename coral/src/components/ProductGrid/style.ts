import styled from 'styled-components';

export const Container = styled.div`
    width: 284px;
    margin-left: 20px;
    margin-bottom: 20px;
`;
export const Wrapper = styled.div`
    width:50%;
    display: flex;
    flex-flow: column wrap;
`;

export const Div = styled.div`  
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const Rating = styled.div`
    display: flex;
    flex-direction: row;
`

export const PriceDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const H4 = styled.h4`
    margin-top: 20px;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

export const H3 = styled.h4`
    margin-top: 20px;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #626262;
`;

export const P = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #171520
`;

export const OldPrice = styled.p`
    margin: 0 0 5px 0 ;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #626262;
    text-decoration-line: line-through;
`;

export const Discount = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #E21D1D;
`;

export const Rate = styled.p`
    width: 100px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #1B4B66;
`;

export const Banner = styled.img``;

export const Img = styled.img`
    margin-top: 20px;
    margin-bottom: 0;
    margin-left: 120px;
    &:hover{
        cursor: pointer;
        filter: invert(78%) sepia(52%) saturate(3799%) hue-rotate(325deg) brightness(100%) contrast(101%);      
    }
`;