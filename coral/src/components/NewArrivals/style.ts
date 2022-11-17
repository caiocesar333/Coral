import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px;
`;

export const Tab = styled.div`
    margin-left: 50px;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ViewAll = styled.div`
    width: 103px;
    height: 44px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`


export const ProductsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const H2 = styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 44px;
`
export const P = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #1B4B66;
    margin-right: 15px;
    &:hover{
        cursor: pointer;
    }
`
