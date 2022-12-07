import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 400px;
    flex-direction: column;
`;

export const H3 = styled.h3`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    color: #13101E;
    margin-bottom: 10px;
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top:1px solid rgba(0, 0, 0, 0.12);
    padding-top:10px;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    gap: 15px;
`;

export const ProdWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const P = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #000;
    margin: 5px;
    &:last-child{
        font-weight: 600;
    }
`