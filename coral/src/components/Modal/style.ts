import styled from 'styled-components';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.25);
    position: fixed;
    display: flex;
    top:0 ;
    left: 0;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    position: fixed;
    left: 1200px;
    top: 80px;
    background: white;
    padding-left: 20px;
    padding-right: 20px;
`;
