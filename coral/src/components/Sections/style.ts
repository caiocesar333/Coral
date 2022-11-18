import styled from 'styled-components';

export const Container = styled.div`
    max-width: 280px;
    max-height: 280px;
    width: 280px;
    height: 280px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    opacity: 0.8;
    &:hover{
        cursor: pointer;
        opacity: 1;
    }
    `;


export const Img = styled.img`
    border-radius: 16px;
`

export const H3 = styled.h3`
    /* z-index: 100; */
    position: absolute;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    margin-left: 20px ;
`