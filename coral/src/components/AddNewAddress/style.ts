import styled from 'styled-components';


export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-bottom: 56px;
    align-items: flex-start;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
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
    white-space: nowrap;
`;

export const Img = styled.img`
    &:hover{
        cursor: pointer;
    }
`;