import styled from 'styled-components';

export const Container = styled.div`
    width: 80vw;
    height: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 100px;
    margin-left: 80px;
`;

export const P = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 10px;
    color: #1B4B66;
    margin: 5px;
    &::first-letter{
        text-transform: uppercase;
    }
    &:hover{
        font-weight: 600;
        cursor: pointer;
    }
`