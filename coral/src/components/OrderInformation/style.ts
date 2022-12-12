import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid #e0e0e0;
`;

export const OrderDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    justify-content: flex-start;
    gap:5px;
`;
export const PaymentDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: center;
    gap:5px;
`;
export const AddressDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: center;
    align-items: flex-start;
    gap:5px;
`;
export const TextDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
`;
export const Info = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #171520;
    margin: 0;
    
`;
