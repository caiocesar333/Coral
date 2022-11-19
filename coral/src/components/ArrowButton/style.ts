
import styled from 'styled-components';
import { ArrowButtonProps } from './ArrowButton';

export const Button = styled.div<ArrowButtonProps|any>`
    width: 51px;
    height: 51px;
    border-radius: 9999px;
    position: absolute;
    margin-right: 50px;
    margin-bottom: 15px;
    background: ${(props) =>props.bg};
    color: ${(props)=> props.color};
    &:hover{
        cursor: pointer;
        background: ${(props) =>props.color};
        transition: 200ms;
    }
    `;

export const Img = styled.img<ArrowButtonProps|any>`
    filter:${(props)=> props.filter} ;
    &:hover{
        filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(24deg) brightness(101%) contrast(102%);
        transition: 200ms;
    }
`;
