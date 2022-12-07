import styled from 'styled-components';

import { PaymentOptionsProps } from './PaymentOptions';

export const Container = styled.div<PaymentOptionsProps>`
    width: 150px;
    height: 120px;
    background: ${props => `url(${props.img})
     no-repeat center`};
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    border: 1px solid #E3E3E3;
    border-radius: 12px;
    &:focus{
        background-color:#639599
    }
`;

export const InputRadio = styled.input`
        margin-top: 10px;
        margin-right: 10px;
`