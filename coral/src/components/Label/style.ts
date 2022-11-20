import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 100px;
    margin-left: 50px;
`;

export const P = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #1B4B66;
    &::first-letter{
        text-transform: uppercase;
    }
    margin: 5px
`