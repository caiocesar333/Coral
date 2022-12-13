import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
`;

export const TextDiv = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 50px;
`;

export const DescriptionDiv = styled.div`
    margin-top: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;

export const H4 = styled.h4`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    margin: 0;
`

export const P = styled.p`
    width: 600px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    margin: 0;
`
export const DescText = styled.p`
    width: 600px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: start;
    margin: 0;
`