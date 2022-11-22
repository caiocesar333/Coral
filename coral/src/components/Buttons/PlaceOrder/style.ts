import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px 100px;
    gap: 8px;

    width: 120px;
    height: 23px;

    background: #1B4B66;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    margin-top: 20px;
    margin-bottom: 30px;

    &:hover{
        cursor: pointer;
        background: #FF8C4B;
    }
`;

export const P = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
`;
