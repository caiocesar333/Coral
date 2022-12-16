import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 70%;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #f1f1f1;
    border-radius: 16px;
    padding: 12px 16px 0 5px;
`;


export const H3 = styled.h3`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin: 5px;
    &:last-child:hover{
        cursor: pointer;
        color: blue;
    }
`;
