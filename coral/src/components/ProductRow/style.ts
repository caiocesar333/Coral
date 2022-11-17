import styled from 'styled-components';

export const Container = styled.div`
    margin-left: 20px;
    cursor: grab;
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
    margin-top: 20px;
    margin-bottom: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #171520
`;

export const Banner = styled.img`

`

export const Img = styled.img`
    margin-top: 20px;
    margin-bottom: 0;
    margin-left: 130px;
    &:hover{
        cursor: pointer;
        filter: invert(78%) sepia(52%) saturate(3799%) hue-rotate(325deg) brightness(100%) contrast(101%);      
    }
`;