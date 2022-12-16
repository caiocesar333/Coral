import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
    margin-top: 20px;
    z-index: 1000;
`;

export const Item = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    gap: 8px;
    justify-content: flex-start;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const TextDiv = styled.div`
    /* width: 200px; */
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    margin-left: 20px;
`;

export const PriceDiv = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    margin-bottom: 35px;
    margin-right: 15px;
    align-items: flex-end;
`;


export const Img = styled.img`
    width: 75px;
    height: 80px;
    &:hover{
        cursor: pointer;
    }
    margin-left: 15px;
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
    font-weight: 600;
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

export const H3 = styled.h3`
    font-weight: 500;
    font-size: 20px;
    line-height: 16px;
    margin-bottom: 15px;
    margin-top: 0;
    margin-left: 10px;
`
