import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    margin-top: 20px;
    z-index: 1000;
`;

export const Item = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    gap: 8px;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const TextDiv = styled.div`
    /* width: 200px; */
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
`;

export const PriceDiv = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    margin-bottom: 35px;
    align-items: flex-end;
`;


export const Img = styled.img`
    width: 75px;
    height: 80px;
`;

export const P = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin: 0px;
    color: #626262;
    margin-bottom: 5px;
    &:first-child{
        color: black;
        font-weight: 500;
    }
    white-space: nowrap;
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
    &:hover{
        cursor: pointer;
    }
`