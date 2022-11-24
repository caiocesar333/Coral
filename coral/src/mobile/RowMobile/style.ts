import styled from 'styled-components';

export const Container = styled.div`
    /* width: 135px; */
    /* margin-left: 20px; */
    cursor: grab;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 5px;   
`;

export const Div = styled.div`  
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;

export const PriceDiv = styled.div`  
    width: 100%;
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const H4 = styled.h4`
    margin: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

export const H3 = styled.h3`
    margin: 0;;
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
    color: #171520;
`;

export const OldPrice = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
    color: #626262;
    text-decoration-line: line-through;
`;

export const Discount = styled.p`
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
    color: #E21D1D;
`;


export const Banner = styled.img`
    border-radius: 16px;
    width: 150px;
`
export const Img = styled.img`
width: 20px;
    margin-bottom: 0;
    /* margin-left: 130px; */
    &:hover{
        cursor: pointer;
        filter: invert(78%) sepia(52%) saturate(3799%) hue-rotate(325deg) brightness(100%) contrast(101%);      
    }
`;