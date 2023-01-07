import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ActionWrapper = styled.div`
    display: flex;
    gap: 50px;
    justify-content: flex-start;
    align-items: center;
`;

export const Img = styled.img`
    
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #626262;
    margin: 5px;
    &:first-child{
        font-weight: 600;
        color: #171520;
    }
`;
