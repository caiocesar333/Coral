import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: #f1f1f1;
    border-radius: 8px;
    height: 70px;
    margin-bottom: 20px;
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    margin-left: 50px;
    gap: 95px;
`;

export const P = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #171520;
    margin: 20px 0 15px;
    width: 100px;
`;

export const Img = styled.img`
    &:hover{
        cursor:pointer;
    }
`