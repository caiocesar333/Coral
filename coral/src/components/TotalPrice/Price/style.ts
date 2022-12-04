import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
`;

export const Type = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

export const PriceDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const P = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #171520;
    margin: 5px;
`;
