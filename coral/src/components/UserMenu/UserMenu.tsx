import { P } from "../Banner/style";
import { UserContent } from "../UserContent/UserContent";
import { UserInfo } from "../UserContent/UserInfo/UserInfo";
import { STabs, STabPanel, STabList, STab } from "./style";
import { UserTab } from "./UserTab/UserTab";

export function UserMenu() {
    return (
        <STabs>
            <STabList>
                <STab>Personal Information</STab>
                <STab>Personal Information</STab>
            </STabList>
            <STabPanel>
                <UserContent/>
            </STabPanel>
        </STabs>
    )
}