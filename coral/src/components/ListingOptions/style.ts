import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
`;

export const Showing = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 24px;
`

export const Img = styled.img`
    
`;

export const P = styled.p`
    font-weight: 550;
    font-size: 14px;
    line-height: 20px;
    color: black;
`;

export const ToShow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 150px;
    padding: 0px;
    gap: 5px;
`;

export const SortBy = styled.div`
    display: flex;
    width: 271px;
    padding: 0px;
    gap: 5px;
    margin-right: 80px;
`;

export const Select = styled.select`
    padding: 16px 12px 16px 16px;
    gap: 12px;
    background: #F1F1F1;
    border-radius: 4px;
    width: 216px;
    outline: none;
    border: none;
    option{
        font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #626262;
    }
`;

export const Input = styled.input`
    padding: 16px 12px 16px 16px;
    gap: 12px;
    background: #F1F1F1;
    border-radius: 4px;
    width: 150px;
    outline: none;
    border: none;
    width: 36px;
    height: 16px;
`;