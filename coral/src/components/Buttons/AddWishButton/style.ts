import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px 90px;
    gap: 5px;

    width: 100px;
    height: 20px;

    background: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1B4B66;
    border: 2px solid #1B4B66;
    
    &:hover{
        cursor: pointer;
        background: #FF8C4B;
    }
`;

export const P = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    margin: 0;
`;
