import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
`;
export const P = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #171520;
    margin-bottom: 5px;
    white-space: nowrap;
    margin-top:0;
`;

export const Input = styled.input`
    padding: 16px 12px 16px 16px;
    gap: 12px;

    width: 69%;
    border: none;
    outline: none;

    /* Grey */

    background: #F1F1F1;
    border-radius: 4px;
    &::placeholder{
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #626262;
    }
`

export const Ddd = styled.input`
    padding: 16px 12px 16px 16px;
    gap: 12px;

    width: 10%;
    border: none;
    outline: none;

    /* Grey */

    background: #F1F1F1;
    border-radius: 4px;
    &::placeholder{
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #626262;
    }
`