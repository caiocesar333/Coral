import styled from 'styled-components';

export const Button = styled.div`
    padding: 2px 20px;
    gap: 8px;

    width: 180px;
    height: 40px;

    background: #1B4B66;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
        background: #FF8C4B;
    }
`;

export const P = styled.p`
   font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
`;
