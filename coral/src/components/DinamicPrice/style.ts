import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 10px;
    gap: 15px;
`;

export const Price = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 30px;
    line-height: 52px;
`;

export const Old = styled.p`
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size:  24px;
    line-height: 26px;
    text-decoration-line: line-through;
    color: #B6B6B6;

`

export const Discount = styled.p`
    margin: 0;  
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: #FF404B;
`