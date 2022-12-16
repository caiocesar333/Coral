import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const TextDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center ;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;
export const P = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 10px;
    color: #13101E;
    &:hover{
        cursor: pointer;
    }
    white-space: nowrap;
`;

export const Text = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
`;