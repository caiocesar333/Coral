import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 15px;
`;

export const Img = styled.img`
     &:hover{
        cursor: pointer;
        filter: invert(78%) sepia(52%) saturate(3799%) hue-rotate(325deg) brightness(100%) contrast(101%);
    }
`;
export const P = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    color: #1B4B66;
    &:hover{
        cursor: pointer;
    }
`;
