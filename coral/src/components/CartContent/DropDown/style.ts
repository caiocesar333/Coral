import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 56px;
    align-items: flex-start;
`;
export const TextDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center ;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);;
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
`;

export const Img = styled.img`
    &:hover{
        cursor: pointer;
    }
`;