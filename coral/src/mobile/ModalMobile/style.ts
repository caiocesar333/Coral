import styled from 'styled-components';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
    top:0 ;
    left: 0;
`
export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Wrapper = styled.div`
    margin-top: 20px;
    margin-left: 8px;
`;


export const Container = styled.div`
    width: 100vw;
    background: white;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    position: fixed;
    bottom: 0;
    height: 45%;
    padding: 20px;
    
`;

export const RatingDiv = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const Name = styled.h4`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #171520;
    &::first-letter{
        text-transform: uppercase;
    }
    margin:0 ;
`;

export const Desc = styled.h5`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #626262;
    margin: 0;
`;

export const Price = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 16px;
    color: #171520;
    margin: 0;
`;

export const OldPrice = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-decoration-line: line-through;
    color: #626262;
    margin: 0;
`;

export const Discount = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #E21D1D;
    margin: 0;
`;

export const Average = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #171520;
    margin: 0;
`;

export const Text = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #626262;
    margin: 0;
`;



export const Rate = styled.img`

`
export const Img = styled.img`

`