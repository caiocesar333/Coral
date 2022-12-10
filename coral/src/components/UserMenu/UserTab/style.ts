import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const Container = styled(Tab)`
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    &:hover{
        cursor: pointer;
        border-left: 2px solid #000
    }
`;

export const P = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #1B4B66;
    margin: 15px;
`