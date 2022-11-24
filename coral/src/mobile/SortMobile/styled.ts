import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    flex-direction: column;
    align-items: flex-start;
`;

export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 8px;
`
export const RadioInput = styled.input`
    color: #1B4B66;
    width: 18px;
    height: 18px;
    margin: 0;
    &:checked{
        background: #eeeeee;
    }
`
export const InputOption = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 15px;
    margin: 0;
`


