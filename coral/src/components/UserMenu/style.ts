import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const STabs = styled(Tabs)`
    width: 100%;
    border-radius: 5px;
    height: 70vh;
    display: flex;
    justify-content: space-between;
    gap: 50px;
`;

export const STabList = styled(TabList)`
    width: 300px;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    background: #f1f1f1;
    padding: 5px;
    border-radius: 5px;
`;

export const STab = styled(Tab)`
    width: 100%;
    height:30px;
    display: flex;
    &:hover{
        cursor: pointer;
        border-left: 2px solid #000
    }
    align-items: center;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #1B4B66;
`

export const STabPanel = styled(TabPanel)`
    display: flex;
    width: 100%;
`;
