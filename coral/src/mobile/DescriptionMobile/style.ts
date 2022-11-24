import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex ;
    flex-direction: column;
    margin-top: 20px;
`;
export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
export const PriceDiv = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;
export const RatingDiv = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const Name = styled.h4`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #171520;
    &::first-letter{
        text-transform: uppercase;
    }
    margin:0 ;
`;

export const Desc = styled.h5`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #626262;
    margin: 0;
`;

export const Price = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 16px;
    color: #171520;
    margin: 0;
`;

export const OldPrice = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-decoration-line: line-through;
    color: #626262;
    margin: 0;
`;

export const Discount = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #E21D1D;
    margin: 0;
`;

export const Average = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #171520;
    margin: 0;
`;

export const Text = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #626262;
    margin: 0;
`;



export const Rate = styled.img`

`