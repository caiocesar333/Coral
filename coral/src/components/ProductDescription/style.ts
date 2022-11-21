import styled from 'styled-components';

export const Container = styled.div`
    width: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
`;

export const Wrapper = styled.div`
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.12); */
`;


export const Rating = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 x;
`

export const H3 = styled.h3`
    margin: 0;
    margin-top: 20px;
    font-weight: 600;
    font-size: 30px;
    line-height: 5px;
    color: #13101E;
    &::first-letter{
        text-transform: uppercase;
    }
`

export const Description = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    color: #626262;
`
export const Rate = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #B6B6B6;
`

export const OffersDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 20px;
`

export const ButtonsDiv = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;
    /* width: 100%; */
`