import styled from 'styled-components';

export const Container = styled.div`
    width: 35%;
    display: flex;
    gap: 50px;
    align-items: center;
`;
export const Wrapper = styled.div`
display: flex;
    width: 250px;
     background: #F1F1F1;
     gap: 8px;
     justify-content: space-around;
     border-radius: 16px;
     padding: 6px 18px;
     align-items: center;
`;

export const Pages = styled.button`
    padding: 6px 18px;
gap: 10px;

width: 42px;
height: 28px;

/* Primary */

border-radius: 8px;
outline: none;
border: none;
&:hover{
    background-color: #1B4B66;
    color: white;
    cursor: pointer;
    transition: 300ms;
}
`;

export const Next = styled.button`
    padding: 6px 18px;
gap: 10px;

width: 70px;
height: 34px;

/* Primary */

border-radius: 8px;
outline: none;
border: none;
text-align: center;
&:hover{
    background-color: #1B4B66;
    color: white;
    cursor: pointer;
    transition: 300ms;
}
`;