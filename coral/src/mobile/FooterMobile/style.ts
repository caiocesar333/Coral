import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #1B4B66;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid #639599;
    margin-bottom: 20px;
`;

export const TextDiv = styled.div`
    margin-left: 15px;
    margin-top: 10px;
`;

export const P = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #B6B6B6;
    &:first-child{
        color: #fff;
    }
    margin: 10px;
`;
