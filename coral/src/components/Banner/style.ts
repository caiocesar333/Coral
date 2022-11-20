import styled from 'styled-components';

export const Container = styled.div`
    margin-top:80px ;
    width: 100vw;
    height: 50px;
    background: #F0F0F0 ;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;


export const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`

export const U = styled.u`
    &:hover{
        cursor: pointer;
    }
`