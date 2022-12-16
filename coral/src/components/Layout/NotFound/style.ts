import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const Img = styled.img`
    width: 100vw;
    `;

export const Arrow = styled.img`
    position: fixed;
    top: 20px;
    width: 60px;
    left: 20px;
    &:hover{
        cursor: pointer;
    }
`
