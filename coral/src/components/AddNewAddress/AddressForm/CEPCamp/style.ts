import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    
    `;

export const P = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #171520;
    margin-bottom: 5px;
    white-space: nowrap;
`;

export const Input = styled.input`
    padding: 16px 12px 16px 16px;
    gap: 12px;

    width: 90%;
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