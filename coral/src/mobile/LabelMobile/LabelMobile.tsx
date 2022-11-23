import { H2, P, Tab, ViewAll } from "./style";
import Arrow from "../../assets/Mobile/arrowArrivals.svg"

export interface LabelMobileProps {
    title: string,
    viewAll: boolean,
}

export function LabelMobile({ title, viewAll }: LabelMobileProps) {

    return (
        <Tab>
            <H2>{title}</H2>
            {viewAll
                ? <ViewAll>
                    <P>View All</P>
                    <img src={Arrow} alt="" />
                  </ViewAll>
                :<ViewAll></ViewAll>
        }
        </Tab>
    )
}