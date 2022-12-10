import styled from 'styled-components';

export const Button = styled.div`
    padding: 2px 20px;
    gap: 8px;

    width: 90px;
    height: 30px;

    background: white;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #1B4B66;
    &:hover{
        cursor: pointer;
    }
`;

export const P = styled.p`
   font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #1B4B66;
`;
