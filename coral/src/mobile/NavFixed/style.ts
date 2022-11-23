import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56px;
  background: white;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-right: 20px;
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
  &:first-child{
    width: 70px;
    height: 70px;
  }
`;

