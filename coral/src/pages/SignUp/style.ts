import styled from 'styled-components';
export const Container = styled.div`
    width:100% ;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    overflow: hidden;
    padding-top: 50px;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 30%;
    overflow-x: hidden;
    display: flex;
    gap: 20px;
    margin: 0;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
`;

export const ContentWrapper = styled.div`
    width: 50%;
    height: 50%;
   display: flex;
   background: white;
   position: absolute;
   justify-content: center;
   align-items: center;
   border-radius:16px;
   flex-direction: column;
`;  

export const Img = styled.img`
    width: 119px;
    height: 213px;
    margin: 0;
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 140%;
    color: #171520;
    text-align: center;
`

export const H2 = styled.h2`
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #171520;
    text-align: center;
    &:hover{
        cursor: pointer;
        color:#b00020 ;
    }
`