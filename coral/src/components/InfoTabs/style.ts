import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const Container = styled.div`
    width: 100%;
    margin-top: 150px;
`;

export const STabs = styled(Tabs)`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

export const STabList = styled(TabList)`
    gap: 20px;
    list-style-type: none;
    height: 48px;
    background: #F1F1F1;
    display: flex;
    align-items: center;
    border-radius: 12px;
    `

export const STab = styled(Tab)`
    padding: 6px 18px;
    gap: 10px;
    border-radius: 8px;
    color: black;
`



export const STabPanel = styled(TabPanel)`
    width: 70%;
`

export const P = styled.p`
    margin: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #626262;
    margin-bottom: 0;
`

