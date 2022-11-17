import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    border-radius: 24px;
`
export const Wrapper = styled.div`
    position: absolute;
    width: 77.5%;
    display: flex;
    justify-content: end;
`

export const Carry = styled.div`
    width: 600px;
    height: 316px;
    background: rgba(222, 222, 222, 0.7);
    backdrop-filter: blur(2.5px);

    border-top-left-radius:24px ;
    border-bottom-left-radius:24px ;

    display: flex;
    flex-direction: column;
    
`

export const H1 = styled.h1`
    width: 500px;
    height: 30px;
    font-style: normal;
    font-weight: 800;
    font-size: 55px;
    line-height: 84px;
    color: #1B4B66;
    margin-left: 40px;
    `

export const H3 = styled.h3`
    width: 500px;
    height: 50px;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 38px;
    color: #1B4B66;
    margin-left: 40px;   
    margin-top: 15px;
    `

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;    
    background: #1B4B66;
    width: 130px ;
    height: 20px;
    border-radius: 8px;
    padding: 10px 20px;
    color: white;
    border: none;
    outline: none;
    margin-left: 40px;
    margin-top: 15px;
    `

export const P = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    margin-left: 5px;
`