import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    border-radius: 8px;
    height: 70px;
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 95px;
    align-items: center;
    justify-content: space-between;
    background: #f1f1f1;
    border-radius: 8px;
    padding: 15px;
`;

export const P = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #171520;
    width: 100px;
    white-space: nowrap;
    &:first-child{
        font-size: 16px;
    }
`;

export const Img = styled.img`
    &:hover{
        cursor:pointer;
    }
`