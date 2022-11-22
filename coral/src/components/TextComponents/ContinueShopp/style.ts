import styled from 'styled-components';

export const P = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    display: flex;
    align-items: center;
    text-align: center;
    text-decoration-line: underline;

    /* Primary */

    color: #1B4B66;

    &:hover{
        cursor: pointer;
        color: #FF8C4B;
    }
`;
