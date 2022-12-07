import styled from 'styled-components';
import { IdOptionsProps } from './IdOptions';

export const Container = styled.div<IdOptionsProps>`
    width: 100%;
    display: flex;
    margin: 8px;
    justify-content: space-between;
    flex-direction: column;
`;
export const Wrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
`;

export const HiddenDiv = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: flex-start;
`;
export const ColumnDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Img = styled.img`
  
`;

export const P = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #171520;
`;

export const InputId = styled.input`
    width: 160px;
    height: 25px;
    border: 1px solid #639599;
    border-radius: 4px;
    margin-top: 15px;
    padding-left: 5px;
`